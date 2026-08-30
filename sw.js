/* BOOM CHAT V19 Service Worker */
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",event=>event.waitUntil(self.clients.claim()));

self.addEventListener("push",event=>{
  let data={};
  try{ data=event.data?.json()||{} }catch{ data={body:event.data?.text()||"New Boom Chat signal."} }

  const title=data.title||"BOOM CHAT · MISSION ALERT";
  const options={
    body:data.body||"New mission signal received.",
    icon:data.icon||undefined,
    badge:data.badge||undefined,
    tag:data.tag||"boom-mission-alert",
    renotify:true,
    data:{openAlerts:true}
  };

  event.waitUntil(self.registration.showNotification(title,options));
});

self.addEventListener("notificationclick",event=>{
  event.notification.close();

  event.waitUntil((async()=>{
    const all=await clients.matchAll({type:"window",includeUncontrolled:true});
    for(const client of all){
      if("focus" in client){
        await client.focus();
        client.postMessage({type:"OPEN_MISSION_ALERTS"});
        return;
      }
    }
    if(clients.openWindow){
      return clients.openWindow(self.registration.scope+"?open=alerts");
    }
  })());
});
