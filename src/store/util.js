/**
 * Created by brianso on 15/11/2016.
 */

export default {
  eventId(rootState){
    return rootState.route.params.eventId;
  },
  memberId(rootState){
    return rootState.route.params.userId;
  },
  teamId(rootState){
    return rootState.route.params.teamId;
  }
}
