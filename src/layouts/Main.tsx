import { Box } from '@mui/material'
import type { ReactNode } from 'react'

import Header from './Header'

type IMainProps = {
  meta: ReactNode
  children: ReactNode
}

const Main = (props: IMainProps) => (
  <Box sx={{ width: '100%' }}>
    {props.meta}

    <Box sx={{ width: '100%', margin: 'auto' }}>
      <Header />
      <Box sx={{ maxWidth: '1200px', padding: '20px', margin: 'auto' }}>
        {props.children}
      </Box>
    </Box>
  </Box>
)

export { Main }
