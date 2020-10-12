import React from 'react';
import {Link} from 'react-router-dom'
import {Map, TileLayer} from 'react-leaflet'

//images
import mapMarkerImg from '../images/map-marker.svg';

//Icons
import { FiPlus } from 'react-icons/fi';

//css
import '../styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css'

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Santo André</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <Map 
                center={[-23.6466625,-46.5066368]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}>
                {/* <TileLayer url="http://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_KEY}`} />
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size="32" color="#ffffff" />
            </Link>
        </div>
    );
};

export default OrphanagesMap;