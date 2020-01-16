import Styled from 'styled-components'


const StyledEpisodeGrid = Styled.section`
  .transitionGroup {
    position: relative;
  }

  .episodes-enter {
    opacity: 0;
    transition: all 700ms ease;
  }

  .episodes-enter-active {
    opacity: 1;
  }

  .episodes-exit {
    opacity: 1;
    transition: all 700ms ease;
  }

  .episodes-exit-active {
    opacity: 0;
  }
`;

const StyledEpisode = Styled.section`
  padding: 0.5rem 0;
  transition: all 700ms ease;
  width: 16rem;
  position: absolute;


  >section {
    padding: 0.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    
    h4 {
      margin: 0;
    }

    button {
      border: none;
      background: none;
      font-size: 2rem;
      text-shadow: 0px 0px 10px red;
    }

    button:hover {
      transform: scale(1.3);
      text-shadow: 0px 0px 30px red;
    }

    button:focus {
      outline: 0;
    }
  }
`

const StyledHeader = Styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, rgba(22,22,22,1) 0%, rgba(64,30,17,1) 100%);
  border-bottom: 1px solid black; 
  padding: 0.5rem;
  position: sticky;
  top: 0;
  z-index: 200;

  h1 {
    color: #F8ED34;
    text-shadow: 2px 2px black;
    font-weight: 900;
    font-size: 4rem;
    line-height: 0.8;
    margin: 1rem;
    transform: skew(0, -5deg);
  }

  .heartcontainer {
    position: relative;
    width: 4rem;
    height: 4rem;
    margin: 1rem 8rem;

    span {
      position: absolute;
      top: 50%;
      left: 50%
    }

    .heart {
      font-size: 4rem;
      z-index: 1;
      -webkit-transform: translate(-50%, -50%); 
    }

    .count {
      font-size: 1.5rem;
      z-index: 200;
      -webkit-transform: translate(-50%, -65%); 
    }
  }
`;

const StyleToggleSwitch = Styled.div`
display: flex;

.toggle-all, .toggle-favorites {
  position: absolute;
  top: 17px;
  transition: all 300ms ease;
  font-weight: bold;
}

.toggle-all {
  left: 40px;
  opacity: 0;
}

.toggle-favorites {
	left: 55px;
}

input[type=checkbox]{
	height: 0;
	width: 0;
	visibility: hidden;
}

label {
	cursor: pointer;
	width: 140px;
	height: 50px;
	background: grey;
	display: block;
	border-radius: 25px;
	position: relative;
}

label:after {
	content: '';
	position: absolute;
	top: 2px;
	left: 2px;
	width: 46px;
	height: 46px;
	background: #fff;
	border-radius: 25px;
	transition: 0.3s;
}

input:checked + label {
  background: red;
}

input:checked + label > .toggle-favorites {
  opacity: 0;
}

input:checked + label > .toggle-all {
  opacity: 1;
}

input:checked + label:after {
	left: calc(100% - 2px);
	transform: translateX(-100%);
}

label:active:after {
	width: 100px;
}
`

export { StyledEpisodeGrid, StyledEpisode, StyledHeader, StyleToggleSwitch }