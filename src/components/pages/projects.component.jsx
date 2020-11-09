import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const Grid = styled.div`
    display: grid;
    grid-template-column: repeat(auto-fill, minmax(300px, 1fr))
    gap: 10px;
`

const Projects = () => {
    return (
        <Container>
            <Grid>

            </Grid>
        </Container>
    )
}

export default Projects
