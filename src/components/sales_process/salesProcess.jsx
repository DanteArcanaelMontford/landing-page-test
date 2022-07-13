import { useEffect, useState } from "react";
import Card from "../card/card";
import "./salesProcess.css";
import img from "../imgs/imagem.png";


const SalesProcess = () => {

  const [behave, setBehave] = useState();

  useEffect(() => {
    (function () {
      function openTab(tabID) {
        const tabs = document.getElementsByClassName("tab__page");

        [...tabs].forEach(tab => tab.style.display = "none")

        document.getElementById(tabID).style.display = "block";
      }



      const tabs = document.querySelectorAll('.tab__page');
      const tabBtns = document.querySelectorAll('.tab__button');

      const removeActives = () => {
        tabBtns.forEach(btn => {
          btn.classList.remove('active_1');
          btn.classList.remove('active_2');
        })
      }

      tabBtns.forEach((btn, i) => {
        btn.onclick = () => {
          removeActives();
          i === 0 ? btn.classList.add('active_1') : btn.classList.add('active_2');
          openTab(tabs[i].id);
        }
      })
    })();

  }, [behave]);

  return (
    <section className="section__sales">
      <div className="section__sales-title">
        <h2>Como podemos ajudar a melhorar seu processo de vendas: </h2>
      </div>
      <div className="tab__container">
        <div className="w3-bar w3-black tab__bar">
          <button className="bar-item w3-button tab__button" onClick={() => setBehave(Math.random())}>Prospecção</button>
          <button className="bar-item w3-button tab__button" >Inteligência de Mercado</button>
        </div>

        <div id="tab-1" className="tab__page">
          <div className="tab__header">
            <h2>Prospecção</h2>
            <p>
              Use a inteligência de dados ao seu favor para
              aumentar a geração de leads e priorizar as que são mais
              aderentes ao seu negócio, além de identificar novas empresas
              com perfís semelhantes aos seus melhores clientes para
              vender mais.
            </p>
          </div>
          <div className="wrapper">
            <div className="lista-item">
              <input className="trigger-input" id="tab-title-3" type="checkbox" />
              <div className="trigger-wrapper">
                <label htmlFor="tab-title-3">
                  <h2 className="tab-title">Prospecção Outbound B2B</h2>
                </label>
                <div className="tab-content">
                  <div className="tab-content-grid">
                    <Card title={'Potencial de Mercado'} img={img}>
                      Relevamos o seu real potencial de mercado (TAN/SAM/SDM), identificamos novas oportunidades
                      para atuação do seu time de vendas
                    </Card>
                    <Card title={'Coaptação de leads'} img={img}>
                      Buscamos os contatos e a localização de leads com perfís adarentes ao seu negócio
                    </Card>
                    <Card title={'Priorização de leads'} img={img}>
                      Recebemos e priorizamos os leads mais semelhantes aos perfís dos seus melhores
                      clientes, aumentando sua chance de fechar novos negócios
                    </Card>
                    <Card title={'Segmentação de base'} img={img}>
                      Disponibilizamos informações detalhadas sobre potenciais clientes para uma
                      segmentação mais inteligente. Assim, é possível separar consumidores em diferentes grupos de acordo
                      com uma série de variáveis que vão desde hábitos de consumo a dados demográficos
                    </Card>
                    <Card title={'Enriquecimento de CRM'} img={img}>
                      Integramos a plataforma Neoway diretamente com seu site ou sistema de preferência,
                      para que você receba os dados que vão enriquecer o seu CRM onde mais for conveniente
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="tab-2" className="tab__page" style={{ "display": "none" }}>
          <div className="tab__header">
            <h2>Inteligência de Mercado</h2>
            <p>
              Acesse dados e informações chave para
              enriquecer o seu CRM, construir estratégias de
              expansão e mapear novas oportunidades antes
              dos seus concorrentes.
            </p>

          </div>
          <div className="wrapper">
            <div className="lista-item">
              <input className="trigger-input" id="tab-title-4" type="checkbox" />
              <div className="trigger-wrapper">
                <label htmlFor="tab-title-4">
                  <h2 className="tab-title">Expansão de mercado</h2>
                </label>
                <div className="tab-content">
                  <div className="tab-content-grid">
                    <Card title={'Mapeamento de concorrência'} img={img}>
                      Ajudamos a empresa a ter mais visiblidade de concorrência e market share
                    </Card>
                    <Card title={'Análise de persona e ICP'} img={img}>
                      Promovemos o acesso a dados para análise de personas,
                      além de identificar o perfil do cliente ideal do seu produto ou serviço
                    </Card>
                    <Card title={'Planejamento de expansão'} img={img}>
                      Geramos insights para criação de estratégias de expensão, analisando sua rentabilidade
                      e as necessidades do mercado de atuaçação
                    </Card>
                    <Card title={'Mapeamento de regiões'} img={img}>
                      Trazemos identificadores de potencial de peformance de novas operações
                      para aumentar a eficiência do seu processo de expensão física
                    </Card>
                  </div>
                </div>
              </div>
            </div>

            <div className="lista-item">
              <input className="trigger-input" id="tab-title-5" type="checkbox" />
              <div className="trigger-wrapper">
                <label htmlFor="tab-title-5">
                  <h2 className="tab-title">Automação de atendimento</h2>
                </label>
                <div className="tab-content">
                  <div className="tab-content-grid">
                    <Card title={'Mapeamento de concorrência'} img={img}>
                      Ajudamos a empresa a ter mais visiblidade de concorrência e market share
                    </Card>
                    <Card title={'Análise de persona e ICP'} img={img}>
                      Promovemos o acesso a dados para análise de personas,
                      além de identificar o perfil do cliente ideal do seu produto ou serviço
                    </Card>
                    <Card title={'Planejamento de expansão'} img={img}>
                      Geramos insights para criação de estratégias de expensão, analisando sua rentabilidade
                      e as necessidades do mercado de atuaçação
                    </Card>
                    <Card title={'Mapeamento de regiões'} img={img}>
                      Trazemos identificadores de potencial de peformance de novas operações
                      para aumentar a eficiência do seu processo de expensão física
                    </Card>
                  </div>
                </div>
              </div>
            </div>

            <div className="lista-item">
              <input className="trigger-input" id="tab-title-6" type="checkbox" />
              <div className="trigger-wrapper">
                <label htmlFor="tab-title-6">
                  <h2 className="tab-title">Segmentação</h2>
                </label>
                <div className="tab-content">
                  <div className="tab-content-grid">
                    <Card title={'Mapeamento de concorrência'} img={img}>
                      Ajudamos a empresa a ter mais visiblidade de concorrência e market share
                    </Card>
                    <Card title={'Análise de persona e ICP'} img={img}>
                      Promovemos o acesso a dados para análise de personas,
                      além de identificar o perfil do cliente ideal do seu produto ou serviço
                    </Card>
                    <Card title={'Planejamento de expansão'} img={img}>
                      Geramos insights para criação de estratégias de expensão, analisando sua rentabilidade
                      e as necessidades do mercado de atuaçação
                    </Card>
                    <Card title={'Mapeamento de regiões'} img={img}>
                      Trazemos identificadores de potencial de peformance de novas operações
                      para aumentar a eficiência do seu processo de expensão física
                    </Card>
                  </div>
                </div>
              </div>
            </div>

            <div className="lista-item">
              <input className="trigger-input" id="tab-title-7" type="checkbox" />
              <div className="trigger-wrapper">
                <label htmlFor="tab-title-7">
                  <h2 className="tab-title">Enriquecimento de dados</h2>
                </label>
                <div className="tab-content">
                  <div className="tab-content-grid">
                    <Card title={'Mapeamento de concorrência'} img={img}>
                      Ajudamos a empresa a ter mais visiblidade de concorrência e market share
                    </Card>
                    <Card title={'Análise de persona e ICP'} img={img}>
                      Promovemos o acesso a dados para análise de personas,
                      além de identificar o perfil do cliente ideal do seu produto ou serviço
                    </Card>
                    <Card title={'Planejamento de expansão'} img={img}>
                      Geramos insights para criação de estratégias de expensão, analisando sua rentabilidade
                      e as necessidades do mercado de atuaçação
                    </Card>
                    <Card title={'Mapeamento de regiões'} img={img}>
                      Trazemos identificadores de potencial de peformance de novas operações
                      para aumentar a eficiência do seu processo de expensão física
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SalesProcess;