import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints } from '../../utils/styles'

export const Wrapper = styled.div`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1.42rem;
  margin: 0 auto;
  max-width: 960px;
`

export const MenuLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 2.1rem;
  font-weight: bold;

  @media (max-width: ${breakpoints.s}px) {
    font-size: 1.3rem;
  }
`

export const CartCounter = styled.span`
  background-color: white;
  color: #663399;
  border-radius: 21px;
  padding: 0 11px;
  font-size: 1.1rem;
  float: right;
  margin: -10.3px;
  z-index: 21;
`
