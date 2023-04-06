import { Paper, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import type { ReactElement } from 'react'

import { Main } from '@/layouts/Main'
import { Meta } from '@/layouts/Meta'
import type { NextPageWithLayout } from '@/models'

const Home: NextPageWithLayout = () => {
  return (
    <Paper
      elevation={1}
      sx={{ minHeight: '400px', borderRadius: '10px', padding: '20px' }}
    >
      <Button variant="contained" color="primary">
        Test
      </Button>
      <Typography variant="h4" color="chocolate" sx={{ marginTop: '20px' }}>
        AAAAA
      </Typography>
    </Paper>
  )
}
Home.getLayout = function getLayout(page: ReactElement) {
  return <Main meta={<Meta title="Home" description="Home" />}>{page}</Main>
}

export default Home
