import * as React from 'react';
import styled, { keyframes } from 'styled-components';

export interface PlayerProps {
    // add interface
    level: number;
    bonus: number;
    onClick?: React.MouseEventHandler<HTMLElement>;
    addLevel?: Function;
    removeLevel?: Function;
    addBonus?: Function;
    removeBonus?: Function;
}

export interface StyledCounterProps {
    active?: boolean;
}

const rotate360 = keyframes`
  from {
    transform: scale(.5);
  }

  to {
    transform: scale(1);
  }
`;

const StyledPlayer = styled.div`
    position: relative;
    width:120px;
    height:120px;
    margin: 0 auto;
    display:flex;
    flex-wrap:wrap;
    text-align:center;
    animation: ${rotate360} .5s ease-out;
`;

const StyledControls = styled.div`
    text-align:center;
    width:100%;
    z-index:999;
`;

const StyledCounter = styled.button`
    display:inline-block;
    background:transparent;
    text-align:center;
    color:black;
    height: 100%;
    width: 50%;
    z-index:-99;
    border:none;
`;

const StyledLevel = styled.p`
    font-weight:bold;
    font-size:14px;
    line-height:16px;
    text-shadow:0 0 4px white;
    position:absolute;
    width:100%;
    top:1em;
    z-index:-1;
`;

const StyledBonus = styled(StyledLevel)`
    bottom:1em;
    top:auto;
`;

const StyledAvatar = styled.div`
    position:absolute;
    height:50px;
    width:100%;
    align-self:center;
    margin:0 auto;

    svg {
        height:100%;
        width:100%;
    }
`;

const StyledTotal = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0;
    margin: 0;
    height:100%;
    p{
        background:black;
        border-radius:50%;
        text-align:center;
        color:white;
        height:1.5em;
        margin:0 auto;
        width:1.5em;
        line-height:1.5em;
    }
`;

const Player: React.StatelessComponent<PlayerProps> = (props): JSX.Element => (
    <StyledPlayer>
        <StyledControls>
            <StyledCounter onClick={() => props.removeLevel && props.removeLevel()}>-</StyledCounter>
            <StyledLevel>{props.level}</StyledLevel>
            <StyledCounter onClick={() => props.addLevel && props.addLevel()}>+</StyledCounter>
        </StyledControls>
        <StyledControls>
            <StyledCounter onClick={() => props.removeBonus && props.removeBonus()}>-</StyledCounter>
            <StyledBonus>{props.bonus}</StyledBonus>
            <StyledCounter onClick={() => props.addBonus && props.addBonus()}>+</StyledCounter>
        </StyledControls>
        <StyledAvatar>
            {/* https://www.flaticon.com/free-icon/wizard_306123 */}
            {Math.random() >= 1 ?
                <svg enableBackground="new 0 0 504.014 504.014" viewBox="0 0 504.014 504.014" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1 1)"><path d="m396.12 199.807v42.667c0 9.387-7.68 17.067-17.067 17.067 0 0-8.533 51.2-25.6 76.8 0 0-17.067 8.533-25.6 8.533 0 0-17.92 1.707-33.28 1.707-8.533-15.36-22.187-27.307-43.52-27.307s-34.987 11.947-44.373 28.16l-.853-.853c-22.187 0-31.573-1.707-31.573-1.707-8.533 0-25.6-8.533-25.6-8.533-17.067-25.6-25.6-76.8-25.6-76.8-9.387 0-17.067-7.68-17.067-17.067v-42.667-.853c40.96 5.973 90.453 9.387 145.067 9.387s104.107-3.413 145.067-9.387v.853z" fill="#ffd0a1" /><path d="m251.053 498.474h-247.466l8.533-25.6c7.68-23.893 25.6-42.667 110.933-42.667h42.667l.853-.853c18.774 36.693 50.347 63.999 84.48 69.12zm238.934-25.6 8.533 25.6h-247.467c34.133-5.12 65.707-32.427 84.48-69.12l.853.853h42.667c85.334 0 103.254 18.773 110.934 42.667z" fill="#aab1ba" /><path d="m174.253 344.874s9.387 1.707 31.573 1.707l.853.853c8.533-15.36 22.187-28.16 44.373-28.16 21.333 0 34.987 11.947 43.52 27.307 15.36 0 33.28-1.707 33.28-1.707 8.533 0 25.6-8.533 25.6-8.533 3.413 33.28-3.413 65.707-17.92 93.013-18.773 36.693-50.347 64-84.48 69.12-34.133-5.12-65.707-32.427-84.48-69.12-14.507-27.307-21.333-60.587-17.92-93.013.001-.001 17.068 8.533 25.601 8.533" fill="#ecf4f7" /><path d="m351.747 112.767c-3.413-12.8-8.533-26.453-15.36-40.107l1.707-.853h.853c3.413.853 17.92 2.56 33.28 3.413h.853c9.387 0 20.48-.853 31.573-3.413 0-25.6-25.6-68.267-153.6-68.267-53.76 0-83.627 59.733-98.133 104.96-9.387 27.307-12.8 48.64-12.8 48.64s34.133 17.067 110.933 17.067c33.28 0 58.88-3.413 76.8-6.827 0 0 13.653-1.707 30.72-8.533-16.213 6.827-30.72 8.533-30.72 8.533-17.92 3.413-43.52 6.827-76.8 6.827-76.8 0-110.933-17.067-110.933-17.067s3.413-21.333 12.8-48.64l-2.56 3.413c-14.507 0-27.307 1.707-27.307 1.707-71.68 9.387-119.467 25.6-119.467 43.52 0 17.067 40.107 32.427 102.4 41.813 40.96 5.973 90.453 9.387 145.067 9.387s104.107-3.413 145.067-9.387c62.293-9.387 102.4-24.747 102.4-41.813 0-18.773-47.787-34.987-118.613-43.52 0 0-16.213-1.707-26.453-1.707zm10.24 44.373c-.853.853-2.56.853-3.413 1.707z" fill="#aab1ba" /></g><path d="m499.52 503.74c-1.707 0-3.413-.853-4.267-2.56l-8.533-25.6c-6.827-20.48-20.48-40.107-106.667-40.107-2.56 0-4.267-1.707-4.267-4.267s1.707-4.267 4.267-4.267c82.773 0 105.813 17.067 115.2 45.227l8.533 25.6c.853 2.56-.853 4.267-2.56 5.12-.853.854-.853.854-1.706.854zm-494.933 0c-.853 0-.853 0-1.707 0-2.56-.853-3.413-3.413-2.56-5.12l8.533-25.6c9.387-28.16 31.573-45.227 115.2-45.227 2.56 0 4.267 1.707 4.267 4.267s-1.707 4.267-4.267 4.267c-86.187 0-99.84 19.627-106.667 40.107l-8.533 25.6c-.853.853-2.56 1.706-4.266 1.706zm247.466 0c-63.147-9.387-114.347-88.747-106.667-165.547-14.507-23.04-23.04-62.293-24.747-74.24-10.24-1.707-17.92-10.24-17.92-21.333v-17.067c0-2.56 1.707-4.267 4.267-4.267s4.267 1.707 4.267 4.267v17.067c0 6.827 5.973 12.8 12.8 12.8 1.707 0 4.267 1.707 4.267 3.413 0 .853 8.533 49.493 24.747 74.24 5.12 2.56 17.067 7.68 23.04 7.68 2.56 0 4.267 1.707 4.267 4.267s-1.707 4.267-4.267 4.267c-5.973 0-16.213-3.413-22.187-5.973-5.12 70.827 41.813 142.507 98.987 151.04 57.173-8.533 103.253-81.067 98.987-151.04-5.973 2.56-15.36 5.973-22.187 5.973-2.56 0-4.267-1.707-4.267-4.267s1.707-4.267 4.267-4.267c5.12 0 16.213-4.267 23.04-7.68 16.213-24.747 23.893-73.387 24.747-74.24 0-1.707 1.707-3.413 4.267-3.413 6.827 0 12.8-5.973 12.8-12.8v-17.067c0-2.56 1.707-4.267 4.267-4.267s4.267 1.707 4.267 4.267v17.067c0 10.24-7.68 19.627-17.92 21.333-2.56 11.947-10.24 51.2-24.747 74.24 5.972 76.801-45.228 156.16-108.375 165.547zm-59.733-85.333c-2.56 0-4.267-1.707-4.267-4.267 0-.853.853-98.133 64-98.133s64 97.28 64 98.133c0 2.56-1.707 4.267-4.267 4.267-2.56 0-4.267-1.707-4.267-4.267 0-.853-.853-89.6-55.467-89.6s-55.467 88.747-55.467 89.6c.002 2.56-1.705 4.267-4.265 4.267zm68.267-59.733h-17.067c-2.56 0-4.267-1.707-4.267-4.267s1.707-4.267 4.267-4.267h17.067c2.56 0 4.267 1.707 4.267 4.267s-1.707 4.267-4.267 4.267zm34.133-102.4c-2.56 0-4.267-1.707-4.267-4.267v-4.267h-12.8c-2.56 0-4.267-1.707-4.267-4.267s1.707-4.267 4.267-4.267h34.133c2.56 0 4.267 1.707 4.267 4.267s-1.707 4.267-4.267 4.267h-12.8v4.267c.001 2.56-1.706 4.267-4.266 4.267zm-85.333 0c-2.56 0-4.267-1.707-4.267-4.267v-4.267h-12.8c-2.56 0-4.267-1.707-4.267-4.267s1.707-4.267 4.267-4.267h34.133c2.56 0 4.267 1.707 4.267 4.267s-1.707 4.267-4.267 4.267h-12.8v4.267c0 2.56-1.706 4.267-4.266 4.267zm42.666-42.667c-122.026 0-251.733-19.627-251.733-55.467 0-28.16 76.8-42.667 122.88-47.787 2.56 0 4.267 1.707 5.12 3.413.853 1.707-1.707 4.267-3.413 5.12-80.214 10.241-116.054 27.308-116.054 39.254 0 22.187 99.84 46.933 243.2 46.933s243.2-24.747 243.2-46.933c0-12.8-35.84-29.867-115.2-39.253-2.56 0-4.267-2.56-3.413-5.12 0-2.56 2.56-4.267 5.12-3.413 46.08 5.973 122.027 19.627 122.027 47.787 0 35.839-129.707 55.466-251.734 55.466zm0-34.133c-76.8 0-111.787-17.067-112.64-17.92-1.707-.853-2.56-2.56-2.56-3.413v-.853c.853-6.827 27.307-157.013 115.2-157.013 146.773 0 157.867 55.467 157.867 72.533 0 .853 0 1.707-.853 2.56s0 0-.853.853l-.853.853c-7.68 4.267-21.333 5.12-34.133 4.267-12.8 0-23.04-1.707-29.013-2.56 17.92 37.547 23.04 76.8 23.04 79.36s-1.707 4.267-3.413 5.12c-2.56 0-4.267-1.707-5.12-3.413 0-.853-8.533-67.413-41.813-108.373-1.707-1.707-.853-4.267.853-5.973 1.707-1.707 4.267-.853 5.973.853 5.973 7.68 11.093 15.36 15.36 23.893h.853c6.827.853 20.48 3.413 34.133 3.413 8.533 0 17.92-.853 27.307-2.56-1.707-17.92-19.627-60.587-149.333-60.587-74.24 0-101.547 124.587-105.813 146.773 9.387 4.267 43.52 15.36 105.813 15.36 28.16 0 53.76-2.56 75.947-6.827 2.56-.853 4.267.853 5.12 3.413v.853c0 1.707-1.707 3.413-3.413 4.267-23.042 2.561-48.642 5.121-77.656 5.121z" fill="#51565f" /></svg>
                :
                <svg enableBackground="new 0 0  503.406 503.406" viewBox="0 0 503.406 503.406" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1 1)"><path d="m252.41 498.139h-248.32s34.133-68.267 102.4-68.267c0 .001 68.267 51.201 145.92 68.267zm246.613 0h-246.613c75.947-17.067 144.213-68.267 144.213-68.267 68.267.001 102.4 68.267 102.4 68.267z" fill="#ecf4f7" /><path d="m301.903 352.219c22.187-20.48 42.667-47.787 52.053-66.56-2.56-12.8-4.267-25.6 0-34.133 8.533-17.067-8.533-42.667 0-59.733s0-42.667 0-42.667-25.6 0-51.2-8.533c0 0-29.013-11.093-51.2-23.893-25.6 16.213-51.2 23.893-51.2 23.893-25.6 8.533-51.2 8.533-51.2 8.533s-8.533 25.6 0 42.667-8.533 42.667 0 59.733c4.267 8.533 2.56 21.333 0 34.133 9.387 19.627 29.867 46.933 52.053 66.56l-.853.853v42.667c0 14.507-29.867 23.04-55.467 28.16-20.48 4.267-38.4 5.973-38.4 5.973s68.267 51.2 145.92 68.267c75.947-17.067 144.213-68.267 144.213-68.267s-18.773-1.707-39.253-5.973c-25.6-5.12-54.613-13.653-54.613-28.16v-42.667z" fill="#ffd0a1" /><path d="m271.183 112.433c-6.827.853-13.653 1.707-19.627 1.707v1.707c22.187 13.653 51.2 23.893 51.2 23.893 25.6 8.533 51.2 8.533 51.2 8.533s8.533 25.6 0 42.667 8.533 42.667 0 59.733c-4.267 8.533-2.56 21.333 0 34.133s4.267 25.6 0 34.133c-8.533 17.067 0 68.267 0 68.267l4.267 34.133-.853 2.56c20.48 4.267 39.253 5.973 39.253 5.973s-8.533-25.6 0-42.667-8.533-42.667 0-59.733c8.533-17.067-8.533-34.133 0-51.2s0-68.267 0-68.267c7.68-15.36 8.533-76.8 8.533-76.8l-11.093 11.093-1.707-1.707c-.853-15.36-4.267-34.987-4.267-34.987s-3.413-20.48-15.36-43.52l-1.707.853c.001.002-46.932 40.109-99.839 49.496 52.053-9.387 99.84-49.493 99.84-49.493l1.707-.853c-17.067-30.72-52.053-65.707-121.173-55.467-65.707-15.36-101.547 23.04-120.32 56.32h.853s46.933 40.107 99.84 49.493c-52.053-9.387-99.84-49.493-99.84-49.493h-.853c-12.8 22.187-16.213 42.667-16.213 42.667s-5.12 14.507-6.827 33.28l-.853.853-9.387-9.387s.853 61.44 8.533 76.8c0 0-8.533 51.2 0 68.267s-8.533 34.133 0 51.2-8.533 42.667 0 59.733c8.533 17.067 0 42.667 0 42.667s17.92-1.707 38.4-5.973v-.853l4.267-36.693s8.533-51.2 0-68.267c-4.267-8.533-2.56-21.333 0-34.133s4.267-25.6 0-34.133c-8.533-17.067 8.533-42.667 0-59.733-8.533-17.067 0-42.667 0-42.667s25.6 0 51.2-8.533c0 0 25.6-7.68 51.2-23.893-6.827 0-13.653-.853-19.627-1.707h39.253z" fill="#ffe079" /><path d="m405.157 131.206s-.853 61.44-8.533 76.8c-8.533 17.067-17.067 17.067-17.067 17.067v-68.267l14.507-14.507zm-281.6 93.867s-8.533 0-17.067-17.067c-7.68-15.36-8.533-76.8-8.533-76.8l9.387 9.387 16.213 16.213z" fill="#ffd0a1" /></g><path d="m253.41 503.406h-.853c-71.68-16.213-136.533-61.44-145.92-68.267-64 .853-97.28 64.853-97.28 65.707-.853 1.707-3.413 2.56-5.973 1.707-1.707-.853-2.56-3.413-1.707-5.973 1.707-2.56 34.987-68.267 103.253-70.827 1.707-6.827 5.12-24.747-.853-36.693-5.12-10.24-2.56-21.333 0-32.427 1.707-10.24 4.267-19.627 0-27.307-5.12-10.24-2.56-19.627 0-28.16 1.707-7.68 4.267-15.36 0-23.04-8.533-17.067-1.707-60.587-.853-69.973-7.68-17.067-8.533-70.827-8.533-77.653 0-1.707.853-3.413 2.56-4.267 1.707-.853 3.413 0 4.267.853l25.6 25.6c1.707 1.707 1.707 4.267 0 5.973-1.707 1.707-4.267 1.707-5.973 0l-17.92-17.92c.853 20.48 2.56 54.613 7.68 64 6.827 13.653 13.653 14.507 13.653 14.507 2.56 0 4.267 2.56 4.267 4.267s-1.707 4.267-4.267 4.267c-.853 0-7.68 0-14.507-9.387-1.707 17.067-4.267 44.373.853 54.613s2.56 19.627 0 28.16c-1.707 7.68-4.267 15.36 0 23.04 5.12 10.24 2.56 21.333 0 32.427-1.707 10.24-4.267 19.627 0 27.307 7.68 15.36 3.413 34.987.853 42.667 12.8 9.387 73.387 50.347 140.8 65.707 65.707-15.36 127.147-56.32 139.093-65.707-1.707-7.68-5.973-28.16.853-42.667 3.413-6.827 1.707-17.067 0-27.307-2.56-11.093-4.267-23.04 0-32.427 3.413-6.827 1.707-14.507 0-23.04-2.56-8.533-4.267-18.773 0-28.16 5.12-10.24 3.413-36.693.853-54.613-6.827 8.533-13.653 9.387-14.507 9.387-2.56 0-4.267-1.707-4.267-4.267s1.707-4.267 4.267-4.267c0 0 6.827-.853 13.653-14.507 5.12-10.24 6.827-43.52 7.68-64l-17.92 17.92c-1.707 1.707-4.267 1.707-5.973 0s-1.707-4.267 0-5.973l25.6-25.6c.853-.853 3.413-1.707 4.267-.853 1.707.853 2.56 2.56 2.56 4.267 0 5.973-.853 59.733-8.533 77.653 1.707 9.387 7.68 52.907-.853 69.973-3.413 6.827-1.707 14.507 0 23.04 2.56 8.533 4.267 18.773 0 28.16-3.413 6.827-1.707 17.067 0 27.307 2.56 11.093 4.267 23.04 0 32.427-5.973 11.947-2.56 29.867-.853 36.693 68.267 1.707 101.547 67.413 103.253 70.827.853 1.707 0 4.267-1.707 5.973-1.707.853-4.267 0-5.973-1.707 0-.853-33.28-64.853-97.28-65.707-9.387 6.827-74.24 52.053-145.067 68.267zm110.08-76.8c-6.827 0-64-.853-64-29.867 0-2.56 1.707-4.267 4.267-4.267s4.267 1.707 4.267 4.267c0 17.067 40.96 21.333 55.467 21.333 2.56 0 4.267 1.707 4.267 4.267s-1.708 4.267-4.268 4.267zm-221.867 0c-2.56 0-4.267-1.707-4.267-4.267s1.707-4.267 4.267-4.267c14.507 0 55.467-4.267 55.467-21.333 0-2.56 1.707-4.267 4.267-4.267s4.267 1.707 4.267 4.267c-.001 29.014-57.174 29.867-64.001 29.867zm213.334-34.133c-1.707 0-4.267-1.707-4.267-3.413-.853-5.12-8.533-52.907 0-70.827 2.56-5.12 2.56-11.947 1.707-19.627-20.48 34.133-66.56 85.333-99.84 85.333s-79.36-51.2-99.84-85.333c-.853 7.68-.853 14.507 1.707 19.627 8.533 17.92 1.707 65.707 0 70.827 0 2.56-2.56 4.267-5.12 3.413-2.56 0-4.267-2.56-3.413-5.12 2.56-13.653 6.827-52.907 0-65.707-5.12-9.387-2.56-23.04 0-36.693 1.707-11.947 4.267-23.893 0-31.573-5.12-10.24-2.56-21.333 0-32.427 1.707-10.24 4.267-19.627 0-27.307-9.387-18.773-.853-45.227 0-46.08.853-1.707 2.56-2.56 4.267-2.56 0 0 25.6 0 49.493-8.533 2.56-.853 4.267.853 5.12 2.56.853 2.56-.853 4.267-2.56 5.12-20.48 6.827-41.813 8.533-49.493 8.533-1.707 6.827-5.12 24.747.853 36.693 5.12 10.24 2.56 21.333 0 32.427-1.707 10.24-4.267 19.627 0 27.307 5.12 9.387 2.56 22.187.853 34.987 18.773 35.84 68.267 90.453 98.133 90.453s79.36-54.613 98.133-90.453c-1.707-12.8-4.267-25.6.853-34.987 3.413-6.827 1.707-17.067 0-27.307-2.56-11.093-4.267-23.04 0-32.427 5.973-11.947 2.56-29.867.853-36.693-7.68 0-28.16-1.707-49.493-8.533-2.56-.853-3.413-3.413-2.56-5.12.853-2.56 3.413-3.413 5.12-2.56 24.747 8.533 49.493 8.533 49.493 8.533 1.707 0 3.413.853 4.267 2.56 0 .853 9.387 27.307 0 46.08-3.413 6.827-1.707 17.067 0 27.307 2.56 11.093 4.267 23.04 0 32.427-3.413 7.68-1.707 19.627 0 31.573 2.56 13.653 4.267 27.307 0 36.693-6.827 12.8-1.707 52.053 0 65.707 0 2.56-.853 5.12-4.266 5.12zm-102.4-68.267c-18.773 0-28.16-9.387-29.013-9.387-1.707-1.707-1.707-4.267 0-5.973 1.707-1.707 4.267-1.707 5.973 0 0 0 7.68 7.68 22.187 7.68s22.187-6.827 22.187-7.68c1.707-1.707 4.267-1.707 5.973 0 1.707 1.707 1.707 4.267 0 5.973.853 0-8.534 9.387-27.307 9.387zm42.666-93.867c-2.56 0-4.267-1.707-4.267-4.267v-11.947c-6.827 1.707-8.533 5.973-9.387 5.973-.853 1.707-3.413 2.56-5.973 1.707-1.707-.853-2.56-3.413-1.707-5.973 0-.853 5.973-11.093 20.48-11.093s20.48 10.24 20.48 11.093c.853 1.707 0 4.267-1.707 5.973-1.707.853-4.267 0-5.973-1.707 0 0-2.56-4.267-9.387-5.973v11.947c1.708 2.561.001 4.267-2.559 4.267zm-85.333-.853c-2.56 0-4.267-1.707-4.267-4.267v-11.947c-6.827 1.707-8.533 5.973-9.387 5.973-.853 1.707-3.413 2.56-5.973 1.707-1.707-.853-2.56-3.413-1.707-5.973 0-.853 5.973-11.093 20.48-11.093s20.48 10.24 20.48 11.093c.853 1.707 0 4.267-1.707 5.973-1.707.853-4.267 0-5.973-1.707 0 0-2.56-4.267-9.387-5.973v11.947c1.708 2.561.001 4.267-2.559 4.267zm42.667-93.013c-2.56 0-4.267-1.707-4.267-4.267v-12.8c-51.2-1.707-100.693-38.4-114.347-49.493-10.24 19.627-13.653 36.693-13.653 37.547-.853 2.56-2.56 3.413-5.12 3.413-2.56-.853-3.413-2.56-3.413-5.12.853-2.56 12.8-61.44 58.027-90.453 23.04-15.36 51.2-18.773 82.773-11.947 64-8.533 98.133 19.627 116.907 45.227 19.627 27.307 23.893 56.32 23.893 58.027 0 2.56-1.707 4.267-3.413 5.12-2.56 0-4.267-1.707-5.12-3.413 0-1.707-2.56-18.773-12.8-37.547-11.947 9.387-62.293 47.787-115.2 50.347v12.8c-.001.852-1.707 2.559-4.267 2.559zm-114.347-74.24c11.093 9.387 63.147 48.64 114.347 48.64 52.907 0 107.52-42.667 115.2-49.493-17.067-28.16-49.494-58.027-110.934-50.347v69.973c0 2.56-1.707 4.267-4.267 4.267s-4.267-1.707-4.267-4.267v-69.973c-28.16-5.973-52.907-1.707-73.387 11.093-16.212 11.093-28.159 25.6-36.692 40.107z" fill="#51565f" /></svg>
            }
        </StyledAvatar>
        <StyledTotal><p>{props.bonus + props.level}</p></StyledTotal>
    </StyledPlayer>
);

export default Player;