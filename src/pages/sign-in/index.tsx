import { Container, Paper, Typography } from '@mui/material'
import type { ReactElement } from 'react'

import { Main } from '@/layouts/Main'
import { Meta } from '@/layouts/Meta'
import type { NextPageWithLayout } from '@/models'

const SignIn: NextPageWithLayout = () => {
  return (
    <Container>
      <Paper
        elevation={1}
        sx={{
          maxWidth: '556px',
          height: '744px',
          margin: 'auto',
          padding: '50px 60px',
        }}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: 'center', fontWeight: '600' }}
        >
          Sign Up
        </Typography>
      </Paper>
    </Container>
  )
}
SignIn.getLayout = function getLayout(page: ReactElement) {
  return (
    <Main meta={<Meta title="Sign In" description="Sign In" />}>{page}</Main>
  )
}

export default SignIn
