import {sleepingSchedule} from '../../../lib/schedule/schedule';

export default {
  mockMember(){
    return {
      id: '',
      name: 'loading',
      description: 'loading',
      quality:{ //radar chart

      },
      team: '',//team id
      schedule: sleepingSchedule()
    }
  }
}
