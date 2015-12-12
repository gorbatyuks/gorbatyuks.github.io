/**
 * Created by ≈жик on 05.11.2015.
 */
'use strict';
function createSecretHolder(secret) {
    var secr = secret;
    return {
        setSecret: function(ubdSecret){
            secr = ubdSecret;
        },
        getSecret: function(){
            return secr;
        }

    }
}
var obj = createSecretHolder(5);
obj.setSecret(2);
console.log (obj.getSecret());

