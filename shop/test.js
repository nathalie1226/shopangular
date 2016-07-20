/**
 * Created by itc_user on 7/20/2016.
 */
console.log('i give up');
window.addEventListener('hashchange',function(){
    console.log('Hash changed:' +window.location.hash);
    console.log("in"); });

window.addEventListener('hashchange',function(){
    if (window.location.hash === "#/partials/description") {
        console.log("cool description");
    }
});