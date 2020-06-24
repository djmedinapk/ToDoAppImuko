import React from 'react';
import './style.scss';
import data from './data';

/**
 *
 * @class Index
 * @extends {React.Component}
 * @author David Medina <djmedinapk@gmail.com>
 */
class Index extends React.Component {

  
  componentWillMount() {
    this.setState({
      data
    })
  }


  /**
   * deleteTask - elimina una tarea de la lista de tareas
   *
   * @param {integer} id id de la tarea a ser eliminada
   * @memberof Index
   */
  deleteTask(id) {
    const { data } = this.state;
    const filtered = data.filter(function(card, index, arr){ return card.id !== id;});
    this.setState({
      data: filtered
    })
  }

  /**
   * addTask - agrega una nueva tarea
   *
   * @param {integer} id
   * @memberof Index
   */
  addTask(id) {
    //agregar Tarea
  }
  
  /**
   * showTask - Muestra una tarea especifica
   *
   * @param {integer} id
   * @memberof Index
   */
  showTask(id) {
    //mostrar tarea
  }

  render () {
    const { data } = this.state;
    return (
      <div className="container">
        <div className="header">
            <div className="header__text">
                <h3 className="header__title">To do list</h3>
                <span className="header__subtitle">Viernes, 17 de Febrero</span>
            </div>
            <a href="/#" className="header__thumbnail">
                <img src="./src/img/profile1.jpg" alt="" className="header__img"/>
            </a>
        </div>
        <div className="content">
            <div className="tasks">
                <div className="tasks__title">
                    <h4 className="tasks__title-text">Tareas</h4>
                    <span className="tasks__subtitle">({data.length + ' asignadas'})</span>
                </div>
                <div className="cards">
                   {data.map(card => 
                    <div key={card.id} className="card">
                       <div className={card.active ? 'card__state  card__state--active' : ' card__state card__state--finish' }>
                            <h5 className="card__state-text">
                              {card.active ? 'Activa':'Finalizada'}
                            </h5>
                            {card.active ? 
                              <a href="/#" role="button" className="button card__button">
                                <span className="button__text">Agregar tiempo</span>
                              </a>: null
                            }
                        </div>
                        <div className="divider"></div>
                        <div className="card__content">
                          <div className="card__info">
                              <a href="/#" className="card__user">
                                  <img src={'./src/img/' + card.image} alt="" className="card__profile-image"/>
                                  <span className="card__username">{card.name}</span>
                              </a>
                              {card.timeLeft ? 
                                <a href="/#" className="card__date">
                                    <i className="far fa-clock card__timeleft-icon"></i>
                                    <span className="card__timeleft">{'Tiempo restante: ' + card.timeLeft}</span>
                                </a> 
                                : null
                              }
                            </div>
                            <div className="card__data">
                                <div className="card__data-content">
                                    <h5 className="card__data-title">{card.card.title}</h5>
                                    <p className="card__data-description">
                                      {card.card.description}
                                    </p>
                                </div>
                                <div className="card__dropdown-menu">
                                    <div className="card__dropdown-button">
                                        <i className="fas fa-ellipsis-v"></i>
                                        <div className="card__dropdown-content">
                                            <div className="card__dropdown-item">
                                                <button onClick={()=>{this.showTask(card.id); }} className="card__dropdown-item-button">
                                                    <i className="fas fa-eye card__dropdown-icon"></i> 
                                                    <span className="card__dropdown-text">Ver tarea</span>
                                                </button>
                                            </div>
                                            <div className={card.active ? 'card__dropdown-item card__dropdown-item--disabled' : 'card__dropdown-item'}>
                                              <button onClick={()=>{this.deleteTask(card.id); }} disabled={card.active} className={card.active ? 'card__dropdown-item-button' : 'card__dropdown-item-button card__dropdown-item-button--delete'}>
                                                  <i className="fas fa-trash card__dropdown-icon"></i>
                                                  <span className="card__dropdown-text">Borrar</span>
                                              </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  )}
                </div>
            </div>
        </div>
        <div className="float-button">
            <div className="float-button__content">
                <button onClick={()=> { this.addTask(); }} className="button button--add">
                    <i className="fas fa-plus"></i>
                </button>
            </div>
        </div>
      </div>
    );
  }

}


export default Index;