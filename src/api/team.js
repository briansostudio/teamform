import {fb, db, auth} from './firebase'

export default {
  async updateTeam(eventId,teamId, updates){
    await db.ref(`events/${eventId}/teams/${teamId}`).update(updates);
  },
  async createTeam(eventId, teamObj){
    return db.ref(`events/${eventId}/teams`).push(teamObj).key;
  },
  /**
   * This add the userId into the member list
   * This doesn't take care the data in user model.
   */
  async addMemberToTeam(eventId, teamId, memberId){
    let membersRef = db.ref(`events/${eventId}/teams/${teamId}/members`);
    let members = (await membersRef.once('value')).val();
    await membersRef.update({
      [members.length]:memberId
    });
    return members.length;
  },
  /**
   * This remove the userId in the member list
   * This doesn't take care the data in user model.
   */
  async removeMemberFromTeam(eventId, teamId, memberId){
    let membersRef = db.ref(`events/${eventId}/teams/${teamId}/members`);
    let snapshot = await membersRef.once('value');
    let members = snapshot.val();
    let mutableMembers = [];
    for(let index in members){
      mutableMembers[index] = members[index];
    }
    let index = mutableMembers.indexOf(memberId);
    mutableMembers.splice(index, 1);
    await membersRef.set(mutableMembers);
  }
}
