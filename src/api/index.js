import {fb, db, auth} from './firebase'
import member from './member'
import event from './event'
import team from './team'

export default {
  member,
  event,
  team,
  async sendJoinTeamRequest(eventId, userId, teamId, message){
    let requestObject = {
      member: userId,
      team: teamId,
      message: message,
      status: 'PENDING'
    };
    return db.ref(`events/${eventId}/requests/`).push(requestObject).key;
  },
  async acceptJoinTeamRequest(eventId, requestId){
    let requestObject = (await db.ref(`events/${eventId}/requests/${requestId}`).once()).val();
    await Promise.all([
      this.member.updateMember(requestObject.member, eventId, {
        status: 'IN_TEAM',
        team:requestObject.team
      }),
      this.team.addMemberToTeam(eventId, requestObject.team, requestObject.member),
      this.removeJoinTeamRequest(eventId, requestId)
    ]);
  },
  async removeJoinTeamRequest(eventId, requestId){
    await db.ref(`events/${eventId}/requests/${requestId}`).remove();
  },
  async deniedJoinTeamRequest(eventId, requestId){
    await db.ref(`events/${eventId}/requests/${requestId}`).update({
      status: 'DENIED'
    });
  },
}

