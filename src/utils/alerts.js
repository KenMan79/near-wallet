import { store } from '..'
import { clearGlobalAlert, clearLocalAlert } from '../actions/status'

export const showAlert = ({data, onlyError, onlySuccess, console = true, localAlert, messageCodeHeader, success} = {}) => ({
    alert: {
        showAlert: localAlert ? false : true,
        onlyError: onlySuccess ? false : true,
        onlySuccess: onlyError ? false : true,
        console,
        localAlert,
        messageCodeHeader,
        success
    },
    data
})

export const dispatchWithAlert = (action, data) => store.dispatch({
    ...action,
    meta: {
        ...action.meta,
        ...showAlert(data)
    }
})

export const actionsPending = (types) => (typeof types === 'string' ? [types] : types).reduce((x, type) => {
    if (store.getState().status?.actionStatus[type]?.pending) {
        return true
    } else {
        return x
    }
}, false)

export const handleClearAlert = () => {
    const { dispatch, getState } = store
    const { state: { globalAlertPreventClear } = {} } = getState().router.location
    const { account } = getState()

    if (!globalAlertPreventClear && !account.globalAlertPreventClear) {
        dispatch(clearAlert())
    }
    dispatch(clearLocalAlert())
}
