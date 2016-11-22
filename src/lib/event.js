import {Schedule} from './schedule'
import memberLib from '../store/modules/member/lib'
export default{
  computeTeamMeta(team, eventState){
    let result =  {
      leader: eventState.members[team.leader],
      freeHours: 0,
      weakness:"unknown",
      members:this.getMembersInTeam(team,eventState),
      radarChartData: [],
    };
    result.radarChartData = {
      labels: eventState.criteria.map((s)=>s.substring(0,3)),
      datasets: result.members.map((member)=>this.getMemberRadarChartData(member))
    };
    console.log(result.radarChartData);
    let members = result.members;

    let labels = eventState.criteria;
    let weaknessMap = labels.map(()=>0);

    let masterTeamSchedule = new Schedule();
    for(let member of members){
      if(member.schedule){
        masterTeamSchedule.combine(member.schedule);
      }

      for(let index in labels){
        if(member.criteria[index] > weaknessMap[index]){
          weaknessMap[index] = member.criteria[index];
        }
      }
    }

    let mi = 0;
    let weak = weaknessMap[0];
    for(let index in weaknessMap){
      if(weaknessMap[index] < weak){
        mi = index;
        weak = weaknessMap[index];
      }
    }
    result.weakness = labels[mi];

    masterTeamSchedule = masterTeamSchedule.resolve();
    result.freeHours = masterTeamSchedule.calculateRemainingTimeInWeek() / 3600000;

    return result;
  },
  getMembersInTeam(team, eventState){
    let members = [];
    for(let uid of team.members){
      members.push(eventState.members[uid]);
    }
    return members;
  },
  getMemberRadarChartData(member){
    let color = this.getColorFromString(member.id);

    let result = {
      label: member.name,
      backgroundColor: "rgba(179,181,198,0.2)",
      borderColor: color.text(),
      pointBackgroundColor: color.text(),
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: color.text(),
      data: member.criteria
    };
    color.a = 0.2;
    result.backgroundColor = color.text();
    return result;
  },
  getColorFromString(str){
    let hash = parseInt(
      parseInt(str, 36)
        .toExponential()
        .slice(2,-5)
      , 10);
    return {
      r:(hash & 0xFF0000) >> 16,
      g:(hash & 0x00FF00) >> 8,
      b:hash & 0x0000FF,
      a:1,
      text(){
        let c = this;
        return `rgba(${c.r},${c.g},${c.b},${c.a})`;
      }
    };
  }
}
