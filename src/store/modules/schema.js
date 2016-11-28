import member from './member/lib'
export default{
  event(){
    return {
      name: '',
      description: '',
      limits: {
        min: 1,
        max: 10
      },
      criteria: [
        "Label1",
        "Label2",
        "Label3",
        "Label4",
        "Label5"
      ],
      teams: [],
      members: {},
      due: new Date(Date.now() + 365 * 86400 * 1000)
    }
  },
  dbEvent(){
    let event = this.event();
    event.teamSize = event.limits;
    delete event.limits;
    return event;
  },
  team(leader){
    let team = {
      name: '',
      description: '',
      members: [],
      requests: [],
      tags: [],
      leader: '',
      size: 0
    };
    if(typeof leader === 'string'){
      team.leader = leader;
      team.members.push(leader);
    }
    return team;
  },
  member:member.mockMember,
}
