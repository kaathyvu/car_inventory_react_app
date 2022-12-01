import React from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import pug_in_a_blanket from '../../assets/images/pug_in_a_blanket.jpg'
import { Link } from 'react-router-dom';

interface Props {
    title: string;
}

const Root = styled('div')({
    padding:0,
    margin:0,
})

const NavbarContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})

const Logo = styled('h1')({
    margin: '0 0 0 0.75em'
})

const LogoA = styled(Link)({
    color: '#765f61',
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontFamily: 'roboto',
    fontSize: '2.75rem',
    letterSpacing: '0.4rem',
    "&:hover": {
        color: '#503a3c'
    },
    transition: '0.3s ease'
})

const LogoNavigation = styled('h1')({
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'flex',
})

const NavA = styled(Link)({
    display: 'block',
    padding: '1.7em',
    color: '#765f61',
    textDecoration: 'none',
    fontFamily: 'roboto',
    fontSize: '1.2rem',
    letterSpacing: '0.3rem',
    "&:hover": {
        color: '#503a3c'
    },
    transition: '0.3s ease'
})

const Main = styled('main')({
    backgroundImage: `url(${pug_in_a_blanket})`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
})

const MainText = styled('div')({
    textAlign: 'center',
    position: 'absolute',
    top: '28%',
    left: '67.5%',
    color: '#503a3c',
    fontFamily: 'roboto',
})

export const Home = (props:Props) => {
    return (
        <Root>
            <NavbarContainer>
                <Logo>
                    <LogoA to='/'>Dawgz</LogoA>
                </Logo>
                <LogoNavigation>
                    <li><NavA to="/">Home</NavA></li>
                    <li><NavA to="/dashboard">Dashboard</NavA></li>
                    <li><NavA to="/signin">Sign In</NavA></li>
                </LogoNavigation>
            </NavbarContainer>
            <Main>
                <MainText>
                    <h1>{props.title}</h1>
                    <p>Dogs are way cooler than cars.</p>
                    <p>I mean, look at this freakin' pug in a blanket!?</p>
                    <p>It can't get any better than that.</p><br></br>
                    <Button color='error' variant='contained' component={Link} to='/dashboard'>See the dawgs</Button>
                </MainText>
            </Main>
        </Root>
    )
}