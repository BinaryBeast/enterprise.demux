function createMatchType(state, payload, blockInfo, context) {
    var data = payload.data;

    state.match_type.insert({
        id: data.match_type_uuid,
        type: data.type,
        max_oppoonents: data.max_oppoonents,
    }).then(matchType => {
        console.log("Match Type created", matchType);
    }).catch(error => {
        console.log("Unable to create Match Type", error);
    })
}
  
const updaters = [
    {
        actionType: "matching1111::mchtypcreate",
        apply: createMatchType,
    },
]
  
const effects = [

]

const handlerVersion = {
    versionName: "v1",
    updaters,
    effects,
}

module.exports = handlerVersion