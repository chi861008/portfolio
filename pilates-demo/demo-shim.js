/* Portfolio demo: no server and no LINE login. Answer every /api call in the browser:
   teacher/auth/studio APIs say "not logged in" so the app falls back to its built-in demo mode,
   student availability submits succeed as demo, anything else is "not found". */
(function(){
  // Every reload of the teacher page starts the demo fresh (students, submissions, schedules, shares).
  try{
    if(/^\/pilates-demo\/teacher\/?$/.test(location.pathname)){
      for(var i=localStorage.length-1;i>=0;i--){var k=localStorage.key(i);if(k&&k.indexOf('pilates-')===0)localStorage.removeItem(k);}
    }
  }catch(e){}
  var f=window.fetch;
  window.fetch=function(u,o){
    var s=typeof u==='string'?u:(u&&u.url)||'';
    if(s.indexOf('/api/')!==0) return f.apply(this,arguments);
    var body,status;
    if(s.indexOf('/api/availability')===0){body={ok:true,demo:true};status=200;}
    else if(/^\/api\/(teacher|auth|studio)\//.test(s)||s==='/api/studio'){body={error:'未登入'};status=401;}
    else {body={error:'展示版沒有連接伺服器'};status=404;}
    return Promise.resolve(new Response(JSON.stringify(body),{status:status,headers:{'Content-Type':'application/json'}}));
  };
})();
