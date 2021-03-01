import React from 'react';

const albums = [
      {
        img: 'https://lastfm.freetls.fastly.net/i/u/770x0/ce0cb937c169c4dc6a7b9aa9c65e751f.jpg#ce0cb937c169c4dc6a7b9aa9c65e751f',
        title: 'Magnolia Electric Co.',
        subtitle: 'Songs: Ohia',
      },
      {
        img: 'https://lastfm.freetls.fastly.net/i/u/770x0/29c4c9fa6ec71315b6b64e1ca5c82211.jpg#29c4c9fa6ec71315b6b64e1ca5c82211',
        title: "Didn't It Rain",
        subtitle: 'Songs: Ohia'
      },
      {
        img: 'https://lastfm.freetls.fastly.net/i/u/770x0/e764090489a84d2b9717830a4d26cf57.jpg#e764090489a84d2b9717830a4d26cf57',
        title: 'Give Up',
        subtitle: 'The Postal Service'
      },
      {
        img: 'https://lastfm.freetls.fastly.net/i/u/770x0/01bcdbc62f77f9011cb80acb9eada9bc.jpg#01bcdbc62f77f9011cb80acb9eada9bc',
        title: 'An Overview on Phenomenal Nature',
        subtitle: 'Cassandra Jenkins'
      },
      {
        img: 'https://lastfm.freetls.fastly.net/i/u/770x0/5495521a59f49db169b74cbf7332b8b5.jpg#5495521a59f49db169b74cbf7332b8b5',
        title: 'Kaputt',
        subtitle: 'Destroyer'
      },
      {
        img: 'https://lastfm.freetls.fastly.net/i/u/770x0/3e95950fb75249bec9fffd8f17b7bc24.jpg#3e95950fb75249bec9fffd8f17b7bc24',
        title: '#1 Record',
        subtitle: 'Big Star'
      },
      {
        img: 'https://lastfm.freetls.fastly.net/i/u/770x0/7690aad2072f8a11b5ab9607e894a7e0.jpg#7690aad2072f8a11b5ab9607e894a7e0',
        title: 'Tyron',
        subtitle: 'slowthai'
      }
    ]
    
    function MiscSection(props) {
      const classes = useMiscStyles();
    
      const makeGallery = (display) => (
        <div className={classes.root}>
          <GridList cellHeight={200} className={classes.gridList} cols={6}>
              {display.map((tile) => <GridListTile key={tile.img} cols={1.5}>
                <img src={tile.img} alt={tile.title}/>
                <GridListTileBar title={tile.title} subtitle={tile.subtitle}/>
              </GridListTile>)}
          </GridList>
        </div>
      )
    
      return (
        <React.Fragment>
          <Grid container spacing={6} style={{marginTop: 20, marginBottom: 70}} direction='column'>
            <Grid item>
              <Element name='Misc' />
              <Typography id='Misc' variant='h4'>Miscellaneous</Typography>
              <Divider style={{marginBottom: 30}}/>
              <Typography>
                Just for fun, here's some stuff I've been listening to lately.
              </Typography>
            </Grid>
            
            <Grid item>
              {makeGallery(albums)}
            </Grid>
            
          </Grid>
        </React.Fragment>
      )
    }