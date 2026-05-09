const validateUser = (req, res, next) => {

  const { name, email, password } = req.body;

  /* =========================
     Required Fields Check
  ========================= */
  if (!name || !email || !password) {

    return res.status(400).json({
      success: false,
      message: 'All fields are required'
    });

  }

  /* =========================
     Email Validation
  ========================= */
  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {

    return res.status(400).json({
      success: false,
      message: 'Invalid email format'
    });

  }

  /* =========================
     Password Validation
  ========================= */
  if (password.length < 6) {

    return res.status(400).json({
      success: false,
      message: 'Password must be at least 6 characters'
    });

  }

  next();
};

module.exports = validateUser;