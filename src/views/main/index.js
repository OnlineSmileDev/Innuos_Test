import React, { useState, useEffect } from 'react';
import {Albums} from '../../config/Albums';
import { Container, Row, Col } from 'reactstrap';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}


function Main() {
	const { height, width } = useWindowDimensions();
	const [albums, setAlbums] = useState(Albums);

	function handleClick(val) {
		if (val === 'ALL') {
			setAlbums(Albums);
		} else {
			setAlbums(
				Albums.filter(album => album.source === val).map(filteredAlbum => {
					return filteredAlbum;
				})
			)
		}
	}

	return (
		<Container class="container">
			<h1 style={{color: 'white'}}>Innuos</h1>
			<ul class="list"> Filter:
				<li onClick={() => handleClick('ALL')}>All</li>
				<li onClick={() => handleClick('LOCAL')}>Local</li>
				<li onClick={() => handleClick('QOBUZ')}>Qobuz</li>
			</ul>
			<div class="grid">
				{albums.map((item, index) => {
					return (
						<div class="item">
							<div
								style={{
									backgroundImage: item.cover? 
										`url(${process.env.PUBLIC_URL + '/img/' + item.cover })` : 
										`url(${process.env.PUBLIC_URL + '/img/undefined_album_cover.png' })`, 
									width: '100%', 
									height: width/7,
									backgroundPosition: 'center',
									backgroundRepeat: 'no-repeat',
									backgroundSize: 'cover'
								}}
							>
							{item.cover?	<img 
									src={ process.env.PUBLIC_URL + '/img/qobuz.png' } 
									style={{ 
										width: '15px', 
										height: '15px', 
										display: 'flex',
										position: 'absolute',
										marginLeft: width/7 - 20,
										marginTop: width/7 - 20,
									}} 
									alt=""
								/> : null}
							</div>
							<h5 class="album">{item.album}</h5>
							<h5 class="artist">{item.artist}</h5>
						</div>
					)
				})}
			</div>
			
		</Container>
		
	)
}

export default Main;