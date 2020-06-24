import React from 'react';
import './style.scss';

class Index extends React.Component {

  render () {
    return (
      <div class="container">
        <div class="header">
            <div class="header__text">
                <h3 class="header__title">To do list</h3>
                <span class="header__subtitle">Viernes, 17 de Febrero</span>
            </div>
            <a href="/#" class="header__thumbnail">
                <img src="./src/img/profile1.jpg" alt="" class="header__img"/>
            </a>
        </div>
        <div class="content">
            <div class="tasks">
                <div class="tasks__title">
                    <h4 class="tasks__title-text">Tareas</h4>
                    <span class="tasks__subtitle">(3 asignadas)</span>
                </div>
                <div class="cards">
                    <div class="card">
                        <div class="card__state card__state--active">
                            <h5 class="card__state-text">Activa</h5>
                            <a href="/#" role="button" class="button card__button">
                                <span class="button__text">Agregar tiempo</span>
                            </a>
                        </div>
                        <div class="divider"></div>
                        <div class="card__content">
                            <div class="card__info">
                                <a href="/#" class="card__user">
                                    <img src="./src/img/profile1.jpg" alt="" class="card__profile-image"/>
                                    <span class="card__username">Juanita Pérez</span>
                                </a>
                                <a href="/#" class="card__date">
                                    <i class="far fa-clock card__timeleft-icon"></i>
                                    <span class="card__timeleft">Tiempo restante: 12hrs</span>
                                </a>
                            </div>
                            <div class="card__data">
                                <div class="card__data-content">
                                    <h5 class="card__data-title">Titulo de la tarea</h5>
                                    <p class="card__data-description">
                                            When you enter into any new area of science, you almost always find yourself with a baffling new language.
                                    </p>
                                </div>
                                <div class="card__dropdown-menu">
                                    <div class="card__dropdown-button">
                                        <i class="fas fa-ellipsis-v"></i>
                                        <div class="card__dropdown-content">
                                            <div class="card__dropdown-item">
                                                    <button class="card__dropdown-item-button">
                                                            <i class="fas fa-eye card__dropdown-icon"></i> 
                                                            <span class="card__dropdown-text">Ver tarea</span>
                                                    </button>
                                            </div>
                                            <div class="card__dropdown-item card__dropdown-item--disabled">
                                                    <button disabled class="card__dropdown-item-button card__dropdown-item-button--delete card__dropdown-item-button--disabled">
                                                            <i class="fas fa-trash card__dropdown-icon"></i>
                                                            <span class="card__dropdown-text">Borrar</span>
                                                    </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                            <div class="card__state card__state--finish">
                                <h5 class="card__state-text">Finalizada</h5>
                            </div>
                            <div class="divider"></div>
                            <div class="card__content">
                                <div class="card__info">
                                    <a href="/#" class="card__user">
                                        <img src="./src/img/profile1.jpg" alt="" class="card__profile-image"/>
                                        <span class="card__username">Juanita Pérez</span>
                                    </a>
                                </div>
                                <div class="card__data">
                                    <div class="card__data-content">
                                        <h5 class="card__data-title">Titulo de la tarea</h5>
                                        <p class="card__data-description">
                                                When you enter into any new area of science, you almost always find yourself with a baffling new language.
                                        </p>
                                    </div>
                                    <div class="card__dropdown-menu">
                                        <div class="card__dropdown-button">
                                            <i class="fas fa-ellipsis-v"></i>
                                            <div class="card__dropdown-content">
                                                <div class="card__dropdown-item">
                                                        <button class="card__dropdown-item-button">
                                                                <i class="fas fa-eye card__dropdown-icon"></i> 
                                                                <span class="card__dropdown-text">Ver tarea</span>
                                                        </button>
                                                </div>
                                                <div class="card__dropdown-item">
                                                        <button class="card__dropdown-item-button card__dropdown-item-button--delete">
                                                                <i class="fas fa-trash card__dropdown-icon"></i>
                                                                <span class="card__dropdown-text">Borrar</span>
                                                        </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div class="card">
                            <div class="card__state card__state--active">
                                <h5 class="card__state-text">Activa</h5>
                                <a href="/#" role="button" class="button card__button">
                                    <span class="button__text">Agregar tiempo</span>
                                </a>
                            </div>
                            <div class="divider"></div>
                            <div class="card__content">
                                <div class="card__info">
                                    <a href="/#" class="card__user">
                                        <img src="./src/img/profile1.jpg" alt="" class="card__profile-image"/>
                                        <span class="card__username">Juanita Pérez</span>
                                    </a>
                                    <a href="/#" class="card__date">
                                        <i class="far fa-clock card__timeleft-icon"></i>
                                        <span class="card__timeleft">Tiempo restante: 12hrs</span>
                                    </a>
                                </div>
                                <div class="card__data">
                                    <div class="card__data-content">
                                        <h5 class="card__data-title">Titulo de la tarea</h5>
                                        <p class="card__data-description">
                                                When you enter into any new area of science, you almost always find yourself with a baffling new language.
                                        </p>
                                    </div>
                                    <div class="card__dropdown-menu">
                                        <div class="card__dropdown-button">
                                            <i class="fas fa-ellipsis-v"></i>
                                            <div class="card__dropdown-content">
                                                <div class="card__dropdown-item">
                                                        <button class="card__dropdown-item-button">
                                                                <i class="fas fa-eye card__dropdown-icon"></i> 
                                                                <span class="card__dropdown-text">Ver tarea</span>
                                                        </button>
                                                </div>
                                                <div class="card__dropdown-item card__dropdown-item--disabled">
                                                        <button disabled class="card__dropdown-item-button card__dropdown-item-button--delete card__dropdown-item-button--disabled">
                                                                <i class="fas fa-trash card__dropdown-icon"></i>
                                                                <span class="card__dropdown-text">Borrar</span>
                                                        </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                                <div class="card__state card__state--finish">
                                    <h5 class="card__state-text">Finalizada</h5>
                                </div>
                                <div class="divider"></div>
                                <div class="card__content">
                                    <div class="card__info">
                                        <a href="/#" class="card__user">
                                            <img src="./src/img/profile1.jpg" alt="" class="card__profile-image"/>
                                            <span class="card__username">Juanita Pérez</span>
                                        </a>
                                    </div>
                                    <div class="card__data">
                                        <div class="card__data-content">
                                            <h5 class="card__data-title">Titulo de la tarea</h5>
                                            <p class="card__data-description">
                                                    When you enter into any new area of science, you almost always find yourself with a baffling new language.
                                            </p>
                                        </div>
                                        <div class="card__dropdown-menu">
                                            <div class="card__dropdown-button">
                                                <i class="fas fa-ellipsis-v"></i>
                                                <div class="card__dropdown-content">
                                                    <div class="card__dropdown-item">
                                                            <button class="card__dropdown-item-button">
                                                                    <i class="fas fa-eye card__dropdown-icon"></i> 
                                                                    <span class="card__dropdown-text">Ver tarea</span>
                                                            </button>
                                                    </div>
                                                    <div class="card__dropdown-item">
                                                            <button class="card__dropdown-item-button card__dropdown-item-button--delete">
                                                                    <i class="fas fa-trash card__dropdown-icon"></i>
                                                                    <span class="card__dropdown-text">Borrar</span>
                                                            </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                </div>
            </div>
        </div>
        <div class="float-button">
            <div class="float-button__content">
                <button class="button button--add">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        </div>
      </div>
    );
  }

}


export default Index;
