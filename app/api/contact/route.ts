import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message, to } = body

    // Here you would integrate with an email service like:
    // - Nodemailer with SMTP
    // - SendGrid
    // - Resend
    // - AWS SES

    // For now, we'll log the message and simulate sending
    console.log("New contact form submission:", {
      from: email,
      to: to,
      name: name,
      subject: subject,
      message: message,
      timestamp: new Date().toISOString(),
    })

    // You can replace this with actual email sending logic
    // Example with a hypothetical email service:
    /*
    await emailService.send({
      to: 'o.crm44@gmail.com',
      from: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    })
    */

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
