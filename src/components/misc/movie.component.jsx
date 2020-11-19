import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

`

const Iframe = styled.iframe`
	width: 625px;
	height: 354px;
	
	@media screen and (max-width: 700px) {
		width: 100vw;
		height: auto;
	}
`

const Video = styled.div`
	margin-bottom: 10vh;
`

const Movie = () => {
	return (
			<Container>
		<Video>
			<Iframe src="https://r3---sn-5hne6ns6.googlevideo.com/videoplayback?expire=1605767231&ei=37u1X-bsE4LGvQSxsqWgAw&ip=180.183.10.123&id=o-AMLVJwT7DCpkKAtTvUaWAVvnItRsgDyBDeh5s0DTVFK6&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&gir=yes&clen=1072961&ratebypass=yes&dur=55.658&lmt=1605718484376798&fvip=3&beids=9466586&c=WEB&txp=6210222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgGFwBc8U2673BFPk9BAkk3xLsTVe57gHcHWGUPAfi5wgCIAVTodLjg1EgkNWPBhH1XtBCDuZbhPOdbFxXTs9u10UA&rm=sn-w5nuxa-c33l77s&fexp=9466586&req_id=d42d1af42ceba3ee&redirect_counter=2&cm2rm=sn-30aer7s&cms_redirect=yes&mh=uU&mip=46.39.104.229&mm=34&mn=sn-5hne6ns6&ms=ltu&mt=1605745584&mv=m&mvi=3&pl=19&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgEJ4KADZwq5KRszJYWNEmKczOeGdkDjz1oDNTtAh3pykCIEvrdmHX5ZcCs0RDZ60nIhZCn3kAp0asXuNkJS7cmTHI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
		</Video>
	</Container>
	)
}

export default Movie
