import api from '../api'
import * as types from './mutation-types'

export default {
    loginWithSocialAuthentication({commit}){
        api.socialLogin().then(() => {
            commit(types.AUTH_STATE_CHANGED)
        })
    }
}