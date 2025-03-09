export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
}

/**
 * Generates HTML for the confirmation email sent to the user.
 */
export function generateConfirmationEmailHtml(data: ContactFormData): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2>Dziękujemy za kontakt, ${data.name}!</h2>
      <p>Otrzymaliśmy Twoje zgłoszenie dotyczące tematu: <strong>${data.topic}</strong>.</p>
      <p>Odpowiemy na Twoją wiadomość najszybciej jak to możliwe.</p>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
        <h3>Twoja wiadomość:</h3>
        <p>${data.message}</p>
      </div>
      <p>Z poważaniem,<br />Zespół Specroll</p>
    </div>
  `;
}

/**
 * Generates HTML for the notification email sent to administrators.
 */
export function generateNotificationEmailHtml(data: ContactFormData): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2>Nowe zgłoszenie kontaktowe</h2>
      <p><strong>Od:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Telefon:</strong> ${data.phone || "Nie podano"}</p>
      <p><strong>Temat:</strong> ${data.topic}</p>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
        <h3>Wiadomość:</h3>
        <p>${data.message}</p>
      </div>
    </div>
  `;
}
