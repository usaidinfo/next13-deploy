'use client'
import { Container, Box, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import Link from 'next/link'

export default function EmailConfirmationPage() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <CheckCircle color="success" sx={{ fontSize: 60, mb: 2 }} />
        <Typography component="h1" variant="h5">
          Thank you
        </Typography>
        <Typography sx={{ mt: 2, mb: 3 }}>
          Please confirm your email address
        </Typography>
        <Link href="/login" style={{ color: 'primary.main' }}>
          Return to login
        </Link>
      </Box>
    </Container>
  )
}