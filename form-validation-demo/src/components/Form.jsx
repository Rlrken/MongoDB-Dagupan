import { useState } from 'react'

const initialValues = { name: '', email: '', password: '' }
const initialErrors = { name: '', email: '', password: '' }

export default function Form() {
  // Step 2.2 — Controlled components
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState(initialErrors)
  const [submitted, setSubmitted] = useState(false)

  // Step 3 — Validation logic
  const validate = (fields) => {
    const newErrors = { name: '', email: '', password: '' }

    // 3.1 Required field validation
    if (!fields.name.trim()) {
      newErrors.name = 'Name is required.'
    }

    if (!fields.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      // 3.2 Email format validation
      newErrors.email = 'Enter a valid email address.'
    }

    if (!fields.password) {
      newErrors.password = 'Password is required.'
    } else if (fields.password.length < 8) {
      // 3.2 Password length validation
      newErrors.password = 'Password must be at least 8 characters.'
    }

    return newErrors
  }

  // Update state on every keystroke
  const handleChange = (e) => {
    const { name, value } = e.target
    const updated = { ...values, [name]: value }
    setValues(updated)

    // Clear error for this field as user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  // Step 5.1 — Prevent default + step 5.2 — submit only when valid
  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = validate(values)
    setErrors(validationErrors)

    const hasErrors = Object.values(validationErrors).some((msg) => msg !== '')
    if (hasErrors) return

    // Step 4.2 — Success: show message and reset
    setSubmitted(true)
    setValues(initialValues)
    setErrors(initialErrors)
  }

  const handleReset = () => setSubmitted(false)

  // ── Styles ──────────────────────────────────────────────
  const styles = {
    card: {
      backgroundColor: '#fff',
      borderRadius: '12px',
      padding: '40px 36px',
      width: '100%',
      maxWidth: '440px',
      boxShadow: '0 4px 24px rgba(0,0,0,0.09)',
    },
    heading: {
      fontSize: '1.6rem',
      fontWeight: '700',
      color: '#1a1a2e',
      marginBottom: '6px',
    },
    subheading: {
      fontSize: '0.9rem',
      color: '#666',
      marginBottom: '28px',
    },
    group: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      marginBottom: '18px',
    },
    label: {
      fontSize: '0.88rem',
      fontWeight: '600',
      color: '#374151',
    },
    input: (hasError) => ({
      padding: '10px 14px',
      border: `1.5px solid ${hasError ? '#ef4444' : '#d1d5db'}`,
      borderRadius: '7px',
      fontSize: '0.95rem',
      outline: 'none',
      transition: 'border-color 0.2s',
      backgroundColor: hasError ? '#fff5f5' : '#fafafa',
      color: '#333',
      width: '100%',
      boxSizing: 'border-box',
    }),
    error: {
      fontSize: '0.82rem',
      color: '#ef4444',
      marginTop: '2px',
    },
    btn: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#4f46e5',
      color: '#fff',
      border: 'none',
      borderRadius: '7px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      marginTop: '8px',
      transition: 'background-color 0.2s',
    },
    success: {
      textAlign: 'center',
      padding: '32px 16px',
    },
    successIcon: {
      fontSize: '3rem',
      marginBottom: '12px',
    },
    successTitle: {
      fontSize: '1.4rem',
      fontWeight: '700',
      color: '#059669',
      marginBottom: '8px',
    },
    successText: {
      color: '#555',
      fontSize: '0.95rem',
      marginBottom: '24px',
    },
    resetBtn: {
      padding: '10px 28px',
      backgroundColor: '#4f46e5',
      color: '#fff',
      border: 'none',
      borderRadius: '7px',
      fontSize: '0.95rem',
      fontWeight: '600',
      cursor: 'pointer',
    },
  }

  // Step 4.2 — Success state
  if (submitted) {
    return (
      <div style={styles.card}>
        <div style={styles.success}>
          <div style={styles.successIcon}>✅</div>
          <div style={styles.successTitle}>Form Submitted!</div>
          <p style={styles.successText}>All fields passed validation successfully.</p>
          <button style={styles.resetBtn} onClick={handleReset}>
            Submit Another
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={styles.card}>
      <h1 style={styles.heading}>Create Account</h1>
      <p style={styles.subheading}>Fill in the details below to get started.</p>

      {/* Step 5.1 — Prevent default submission */}
      <form onSubmit={handleSubmit} noValidate>

        {/* Name Field */}
        <div style={styles.group}>
          <label style={styles.label} htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="e.g. Juan dela Cruz"
            value={values.name}
            onChange={handleChange}
            style={styles.input(!!errors.name)}
          />
          {/* Step 4.1 — Display error messages */}
          {errors.name && <span style={styles.error}>{errors.name}</span>}
        </div>

        {/* Email Field */}
        <div style={styles.group}>
          <label style={styles.label} htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="e.g. juan@email.com"
            value={values.email}
            onChange={handleChange}
            style={styles.input(!!errors.email)}
          />
          {errors.email && <span style={styles.error}>{errors.email}</span>}
        </div>

        {/* Password Field */}
        <div style={styles.group}>
          <label style={styles.label} htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Minimum 8 characters"
            value={values.password}
            onChange={handleChange}
            style={styles.input(!!errors.password)}
          />
          {errors.password && <span style={styles.error}>{errors.password}</span>}
        </div>

        <button type="submit" style={styles.btn}>
          Create Account
        </button>

      </form>
    </div>
  )
}