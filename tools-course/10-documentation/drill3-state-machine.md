# Drill 3 — State Machine: Signup Flow

This state diagram models a simple signup flow showing the main states and transitions
(enter details, validate, email verification, success, failure).

```mermaid
stateDiagram-v2
    [*] --> EnterDetails

    EnterDetails --> Validating : submit
    EnterDetails --> [*] : cancel

    Validating --> InvalidDetails : validation_failed
    Validating --> CreateAccount : validation_passed

    CreateAccount --> SendVerificationEmail
    SendVerificationEmail --> AwaitVerification

    AwaitVerification --> Verified : user_clicks_verification_link
    AwaitVerification --> VerificationExpired : timeout

    Verified --> Success
    VerificationExpired --> ResendVerification : user_requests_resend
    ResendVerification --> SendVerificationEmail

    InvalidDetails --> EnterDetails : user_fixes_form
    Success --> [*]
