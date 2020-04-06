import React from 'react';
import maletaG from '../assets/maletaGrandeNacional.png';
import maletaGp from '../assets/maletaGrandePlus.jpg';
import maletaGn from '../assets/maletaGrandeNormal.png';
import maletaP from '../assets/maletaPequeña.jpg';
import impermiable from '../assets/impermiableCompleto.png';
import impermiableMaleta from '../assets/impermiableMaleta.jpeg';
import portaCelular from '../assets/portaCelular.jpeg';
import libreta from '../assets/libreta.png';
import luzLed from '../assets/luzLed.png';
import termo from '../assets/termo.png';
import bandarefletiva from '../assets/bandarefletiva.png';
import chaleco from '../assets/chaleco.png';
import cuello from '../assets/cuello.jpg';
import gafas from '../assets/gafas.png';
import mangas from '../assets/mangas.jpg';
import tazaCafe from '../assets/tazaCafe.png';

const Producto = () => {
  return (
    <>
      <div className="box-scroll box">
        <section class="card2 d-flex">
          <div class="card--content">
            <div class="card cardProyecto">
              <img src={luzLed} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Luz led carabinero</h5>
                <h5 class="price text-center">4.000</h5>
                <div className="text-center">
                  {' '}
                  <a href="#" class="btn btn btn-success ">
                    Comprar
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>

          <div class="card--content">
            <div class="card cardProyecto">
              <img src={termo} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Bollito </h5>
                <h5 class="price text-center">3.850$</h5>
                <div className="text-center">
                  {' '}
                  <a href="#" class="btn btn btn-success ">
                    Comprar
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>

          <div class="card--content">
            <div class="card cardProyecto">
              <img src={bandarefletiva} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Banda refletiva </h5>
                <h5 class="price text-center">8.000$</h5>
                <div className="text-center">
                  {' '}
                  <a href="#" class="btn btn btn-success ">
                    Comprar
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>

          <div class="card--content">
            <div class="card cardProyecto">
              <img src={chaleco} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Chaleco</h5>
                <h5 class="price text-center">36.000$</h5>
                <div className="text-center">
                  {' '}
                  <a href="#" class="btn btn btn-success ">
                    Comprar
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>

          <div class="card--content">
            <div class="card cardProyecto">
              <img src={cuello} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Cuello</h5>
                <h5 class="price text-center">8.500$</h5>
                <div className="text-center">
                  {' '}
                  <a href="#" class="btn btn btn-success ">
                    Comprar
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>

          <div class="card--content">
            <div class="card cardProyecto">
              <img src={gafas} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Gafas</h5>
                <h5 class="price text-center">10.000$</h5>
                <div className="text-center">
                  {' '}
                  <a href="#" class="btn btn btn-success ">
                    Comprar
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>

          <div class="card--content">
            <div class="card cardProyecto">
              <img src={mangas} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Maleta Grande Nacional</h5>
                <h5 class="price text-center">11.000$</h5>
                <div className="text-center">
                  {' '}
                  <a href="#" class="btn btn btn-success ">
                    Comprar
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>

          <div class="card--content">
            <div class="card cardProyecto">
              <img src={tazaCafe} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Taza cafe</h5>
                <h5 class="price text-center">8.500$</h5>
                <div className="text-center">
                  {' '}
                  <a href="#" class="btn btn btn-success ">
                    Comprar
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <h2 className="text-center my-3">Aca hay mas</h2>
      <div className="box-scroll box">
        <section class="card2 d-flex">
          <div class="card--content">
            <div class="card cardProyecto">
              <img src={maletaG} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Maleta Grande Nacional</h5>
                <h5 class="price text-center">79.500$</h5>
                <div className="text-center">
                  {' '}
                  <a href="#" class="btn btn btn-success ">
                    Comprar
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>

          <div class="card--content">
            <div class="card cardProyecto">
              <img src={maletaGp} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Maleta Grande Standar</h5>
                <h5 class="price text-center">109.500$</h5>
                <div className="text-center">
                  {' '}
                  <a href="#" class="btn btn btn-success ">
                    Comprar
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>

          <div class="card--content">
            <div class="card cardProyecto">
              <img src={maletaGn} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Maleta Grande Plus</h5>
                <h5 class="price text-center">119.500$</h5>
                <div className="text-center">
                  {' '}
                  <a href="#" class="btn btn btn-success ">
                    Comprar
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>

          <div class="card--content">
            <div class="card cardProyecto">
              <img src={maletaP} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">
                  Maleta Grande Pequeña (Negra)
                </h5>
                <h5 class="price text-center">23.800$</h5>
                <div className="text-center">
                  {' '}
                  <a href="#" class="btn btn btn-success ">
                    Comprar
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>

          <div class="card--content">
            <div class="card cardProyecto">
              <img src={impermiable} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Impermiable (Completo)</h5>
                <h5 class="price text-center">54.000$</h5>
                <div className="text-center">
                  {' '}
                  <a href="#" class="btn btn btn-success ">
                    Comprar
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>

          <div class="card--content">
            <div class="card cardProyecto">
              <img src={impermiableMaleta} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Impermiable (Maleta)</h5>
                <h5 class="price text-center">10.650$</h5>
                <div className="text-center">
                  {' '}
                  <a href="#" class="btn btn btn-success ">
                    Comprar
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>

          <div class="card--content">
            <div class="card cardProyecto">
              <img src={portaCelular} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Porta Celular</h5>
                <h5 class="price text-center">5.500$</h5>
                <div className="text-center">
                  {' '}
                  <a href="#" class="btn btn btn-success ">
                    Comprar
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>

          <div class="card--content">
            <div class="card cardProyecto">
              <img src={libreta} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title text-center">Libreta</h5>
                <h5 class="price text-center">8.000$</h5>
                <div className="text-center">
                  {' '}
                  <a href="#" class="btn btn btn-success ">
                    Comprar
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Producto;
