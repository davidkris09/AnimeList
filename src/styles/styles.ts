import styled from '@emotion/styled'
import {css} from '@emotion/css'
import type { keyframes } from '@emotion/react'

export const Navigation = styled.nav`
    padding: 32px;
    display: flex;
    background-color: transparent;
`

export const MenuBar = styled.a`
    display: flex;
    margin-left: 0.5rem;
    font-size: 15px;
    color: white;
    &:hover {
        color: red;
    }
`

export const Row = styled.div`
    align-items: center;
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
`

export const Column = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 10px;
    margin: auto;

    @media screen and (max-width: 600px) {
        width: 100%;
        display: block;
        margin-bottom: 20px;
    }
`

export const Card = styled.div`
    display: grid;
    place-items: center;
    width: 80vw;
    max-width: 14rem;
    height: 19rem;
    overflow: hidden;
    border-radius: 0.625rem;
    box-shadow: 0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
    float: left;

    &:hover {
        cursor: pointer;
    }
`

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-self: flex-end;
    height: 15%;
    padding: 12% 1.25rem 1.875rem;
    background: linear-gradient(
        180deg,
        hsla(0, 0%, 0%, 0) 0%,
        hsla(0, 0%, 0%, 0.3) 10%,
        hsl(0, 0%, 0%) 100%
    );
`

export const CardTitle = styled.h2`
    position: relative;
    width: fit-content;
    font-size: 1rem;
    font-family: "Montserrat", sans-serif;
    color: white;
    line-height: 1.1;
`

export const Image = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    object-fit: cover;
    max-width: 100%;
    height: auto;
`

export const DetailCoverImage = styled.img`
    border-radius: 0.625rem;
    box-shadow: 0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
    margin: auto;
`

export const Content = styled.div`
    grid-auto-rows: auto;
    height: 100%;
`

export const H1 = styled.h1`
    float: left;
    font-weight: bold;
    color: white;
    padding: 0 0 2rem 0;
`

export const H2 = styled.h2`
    float: left;
    font-weight: bold;
    color: white;
    padding: 0 0 2rem 0;
    width: 100%;
`

export const List = styled.li`
    float: left;
    color: white;
`

export const ListCollection = styled.li`
    color: white;
    list-style: none;
    padding: 2%;
`

export const Scores = styled.label`
    color: #32CD32;
    padding: 0 0 2rem 0;
`

export const Description = styled.p`
    text-align: left;
    padding-right: 3rem;
    font-size: 1.3rem;
    color: white;
`

export const Button = styled.button`
    background-color: #E7625F;
    border: none;
    border-radius: 2rem;
    font-size: 1rem;
    padding: 10px 25px 10px 25px;
    color: white;
    margin-left: 2%;

    &:hover{
        cursor: pointer;
        background-color: #BA0F30;
    }
`

export const ButtonAdd = styled.button`
    background-color: #E7625F;
    border: none;
    border-radius: 2rem;
    font-size: 1rem;
    padding: 10px 25px 10px 25px;
    color: white;
    float: right;

    &:hover{
        cursor: pointer;
        background-color: #BA0F30;
    }
`

export const ContainerModal = styled.div`
    z-index: 3;
    transition: 0.3s ease;
    backdrop-filter: blur(30px);
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.2);
    box-shadow: 0 10px 20px rgba(black, 0.2);
    left: 50%;
    max-width: 90%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 90%;
    text-align: left;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
`

export const ContentModal = styled.div`
    margin: 5% 5% 5% 5%;
    color: white;
    font-size: 1.5rem;
    width: 50%;
`

export const ContentListCollectionModal = styled.div`
    margin: 5%;
`

export const AddButton = styled.button`
    border: none;
    border-radius: 10px;
    background-color: #E7625F;
    color: white;
    font-size: 1.5rem;
    padding: 5px 20px 5px 20px;
    margin-left: 20%;

    &:hover{
        cursor: pointer;
        background-color: #BA0F30;
    }
`

export const FieldAddCollection = styled.input`
    width: 80%;
    padding: 10px;
    border-radius: 2rem;
`

export const LabelLink = styled.a`
    font-style: italic;
    text-decoration: underline;
    color: white;
    font-size: 1.5rem;

    &:hover{
        cursor: pointer;
        color: red;
    }
`

export const ButtonLoad = styled.button`
    border: 1px solid black;
    border-radius: 10px;
    background-color: #0096FF;
    color: white;
    padding: 10px;
    margin: auto;
    place-items: center;
    font-size: 1rem;

    &:hover{
        cursor: pointer;
        background-color: #7393B3;
    }
`