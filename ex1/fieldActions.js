export function changeValue(e){
    console.log('Changed!')
    return{
        type: 'VALUE_CHANGED',
        payload: e.target.value
    }
}