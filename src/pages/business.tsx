export default function Business(){
 return (
  <div style={{padding:32, background:'black', color:'white', minHeight:'100vh', fontFamily:'sans-serif'}}>
   <h1 style={{fontSize:36, fontWeight:800}}>TVVV Zero Trust LV3</h1>
   <p style={{color:'#aaa', marginTop:8}}>Latency 0.70ms avg | 9.34ms worst | TP 100 TN 100 FP 0 FN 0</p>
   <div style={{marginTop:24, display:'grid', gap:16, maxWidth:800}}>
    <div style={{border:'1px solid #333', padding:20, borderRadius:12}}><b>Modelo de Negocio</b><br/>Licenciamiento SaaS B2B por volumen de vehículos producidos (Tier-1 y OEMs).</div>
    <div style={{border:'1px solid #333', padding:20, borderRadius:12}}><b>Eficiencia de Costos</b><br/>Al ser una solución puramente de software, se integra en los controladores existentes sin requerir rediseños costosos de hardware. No BOM extra, OTA deployable.</div>
    <div style={{border:'1px solid #333', padding:20, borderRadius:12}}><b>Cumplimiento Regulatorio</b><br/>Diseñado para facilitar la certificación bajo UN R155 e ISO/SAE 21434. CSMS audit log ready, ECU-LOG-01 Forensics.</div>
   </div>
  </div>
 )
                 }
