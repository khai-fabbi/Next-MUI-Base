import { Paper, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import type { ReactElement } from 'react'

import { Main } from '@/layouts/Main'
import { Meta } from '@/layouts/Meta'
import type { NextPageWithLayout } from '@/models'

const Index: NextPageWithLayout = () => {
  return (
    <Paper
      elevation={2}
      sx={{ minHeight: '400px', borderRadius: '10px', padding: '20px' }}
    >
      <Button variant="contained" color="warning">
        Test
      </Button>
      <Typography color="initial">AAAAA</Typography>
    </Paper>
  )
}
Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <Main meta={<Meta title="Recustomer" description="Recustomer" />}>
      {page}
    </Main>
  )
}

export default Index
