/* Portfolio demo: no server and no LINE login. Answer every /api call in the browser:
   teacher/auth/studio APIs say "not logged in" so the app falls back to its built-in demo mode,
   student availability submits succeed as demo, anything else is "not found". */
(function(){
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
