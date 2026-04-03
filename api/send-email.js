import { Resend } from 'resend';

// ========================================== //
// Endpoint Serverless per l'invio di email   //
// Compatibile con Vercel Functions           //
// ========================================== //

// Inizializzazione sicura tramite variabile d'ambiente
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // CORS Configuration (Opzionale: garantisce che possa essere chiamato dal frontend)
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Gestione delle richieste preflight (CORS)
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Verifica metodo
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed - Only POST is supported' });
  }

  try {
    const { name, email, company, message } = req.body;

    // Validazione base
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'I campi Nome, Email e Messaggio sono obbligatori.' });
    }

    // Effettua l'invio reale tramite le librerie Resend
    // N.B: Il campo 'from' richiede un dominio verificato su Resend es: 'noreply@tuodominio.com'
    // Per test è concesso usare 'onboarding@resend.dev' ma invia solo alla tua email associata.
    const { data, error } = await resend.emails.send({
      from: 'Sito Sostenibilità <onboarding@resend.dev>', 
      to: ['marcdp99@gmail.com'], // l'email a cui arriveranno i messaggi
      subject: `Nuovo contatto da: ${name}`,
      reply_to: email, // permette di ripondere direttamente all'utente 
      html: `
        <h2>Hai ricevuto un nuovo messaggio dal form del sito!</h2>
        <table border="0" cellpadding="10" cellspacing="0" width="100%" style="border: 1px solid #eee; border-collapse: collapse; max-width: 600px; font-family: Arial, sans-serif;">
          <tr>
            <td style="border-bottom: 1px solid #eee; background: #fafafa;"><strong>Nome:</strong></td>
            <td style="border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="border-bottom: 1px solid #eee; background: #fafafa;"><strong>Email:</strong></td>
            <td style="border-bottom: 1px solid #eee;">
              <a href="mailto:${email}">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="border-bottom: 1px solid #eee; background: #fafafa;"><strong>Azienda:</strong></td>
            <td style="border-bottom: 1px solid #eee;">${company || 'Non specificata'}</td>
          </tr>
          <tr>
            <td colspan="2" style="background: #fafafa;"><strong>Messaggio:</strong></td>
          </tr>
          <tr>
            <td colspan="2" style="border-bottom: 1px solid #eee; white-space: pre-wrap;">${message}</td>
          </tr>
        </table>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return res.status(400).json({ error });
    }

    // Risposta di successo al Client Vue
    return res.status(200).json({ success: true, data });
    
  } catch (error) {
    console.error('Server Internal Error:', error);
    return res.status(500).json({ error: 'Errore interno del server durante elaborazione.' });
  }
}
