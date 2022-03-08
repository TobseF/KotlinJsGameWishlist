if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'output'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'output'.");
}var output = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwCCE = Kotlin.throwCCE;
  var addClass = Kotlin.kotlinx.dom.addClass_hhb33f$;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var throwUPAE = Kotlin.throwUPAE;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var toShort = Kotlin.toShort;
  function Game(title, price, description, url, coverUrl) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.url = url;
    this.coverUrl = coverUrl;
  }
  Game.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Game',
    interfaces: []
  };
  Game.prototype.component1 = function () {
    return this.title;
  };
  Game.prototype.component2 = function () {
    return this.price;
  };
  Game.prototype.component3 = function () {
    return this.description;
  };
  Game.prototype.component4 = function () {
    return this.url;
  };
  Game.prototype.component5 = function () {
    return this.coverUrl;
  };
  Game.prototype.copy_x0a6t6$ = function (title, price, description, url, coverUrl) {
    return new Game(title === void 0 ? this.title : title, price === void 0 ? this.price : price, description === void 0 ? this.description : description, url === void 0 ? this.url : url, coverUrl === void 0 ? this.coverUrl : coverUrl);
  };
  Game.prototype.toString = function () {
    return 'Game(title=' + Kotlin.toString(this.title) + (', price=' + Kotlin.toString(this.price)) + (', description=' + Kotlin.toString(this.description)) + (', url=' + Kotlin.toString(this.url)) + (', coverUrl=' + Kotlin.toString(this.coverUrl)) + ')';
  };
  Game.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.price) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    result = result * 31 + Kotlin.hashCode(this.coverUrl) | 0;
    return result;
  };
  Game.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.title, other.title) && Kotlin.equals(this.price, other.price) && Kotlin.equals(this.description, other.description) && Kotlin.equals(this.url, other.url) && Kotlin.equals(this.coverUrl, other.coverUrl)))));
  };
  function GameCardBuilder() {
  }
  GameCardBuilder.prototype.build_1beoi$ = function (game) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var containerElement = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : throwCCE();
    var imageElement = Kotlin.isType(tmp$_0 = document.createElement('img'), HTMLImageElement) ? tmp$_0 : throwCCE();
    var titleElement = Kotlin.isType(tmp$_1 = document.createElement('div'), HTMLDivElement) ? tmp$_1 : throwCCE();
    var priceElement = Kotlin.isType(tmp$_2 = document.createElement('div'), HTMLDivElement) ? tmp$_2 : throwCCE();
    var descriptionElement = Kotlin.isType(tmp$_3 = document.createElement('div'), HTMLDivElement) ? tmp$_3 : throwCCE();
    var viewDetailsButtonElement = Kotlin.isType(tmp$_4 = document.createElement('button'), HTMLButtonElement) ? tmp$_4 : throwCCE();
    this.bind_0(game, imageElement, titleElement, priceElement, descriptionElement, viewDetailsButtonElement);
    this.applyStyle_0(containerElement, imageElement, titleElement, priceElement, descriptionElement, viewDetailsButtonElement);
    this.appendChild_0(containerElement, [imageElement, titleElement, descriptionElement, priceElement, viewDetailsButtonElement]);
    return containerElement;
  };
  GameCardBuilder.prototype.applyStyle_0 = function (containerElement, imageElement, titleElement, priceElement, descriptionElement, viewDetailsButtonElement) {
    addClass(containerElement, ['card', 'card-shadow']);
    addClass(imageElement, ['cover-image']);
    addClass(titleElement, ['text-title', ' float-left']);
    addClass(descriptionElement, ['text-description', ' float-left']);
    addClass(priceElement, ['text-price', ' float-left']);
    addClass(viewDetailsButtonElement, ['view-details', 'ripple', 'float-right']);
  };
  function GameCardBuilder$bind$lambda(closure$game) {
    return function (it) {
      window.open(closure$game.url);
      return Unit;
    };
  }
  GameCardBuilder.prototype.bind_0 = function (game, imageElement, titleElement, priceElement, descriptionElement, viewDetailsButtonElement) {
    imageElement.src = game.coverUrl;
    titleElement.innerHTML = game.title;
    priceElement.innerHTML = game.price;
    descriptionElement.innerHTML = game.description;
    viewDetailsButtonElement.innerHTML = 'view details';
    viewDetailsButtonElement.addEventListener('click', GameCardBuilder$bind$lambda(game));
  };
  GameCardBuilder.prototype.appendChild_0 = function ($receiver, elements) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== elements.length; ++tmp$) {
      var element = elements[tmp$];
      $receiver.appendChild(element);
    }
  };
  GameCardBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameCardBuilder',
    interfaces: []
  };
  var API_URL;
  function main(args) {
    var bookStorePresenter = new WishListPresenter();
    var bookStorePage = new WishListPage(bookStorePresenter);
    bookStorePage.show();
  }
  function WishListContract() {
  }
  function WishListContract$View() {
  }
  WishListContract$View.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'View',
    interfaces: []
  };
  function WishListContract$Presenter() {
  }
  WishListContract$Presenter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Presenter',
    interfaces: []
  };
  WishListContract.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'WishListContract',
    interfaces: []
  };
  function WishListPage(presenter) {
    this.presenter_0 = presenter;
    var tmp$, tmp$_0;
    this.loader_0 = Kotlin.isType(tmp$ = document.getElementById('loader'), HTMLDivElement) ? tmp$ : throwCCE();
    this.content_0 = Kotlin.isType(tmp$_0 = document.getElementById('content'), HTMLDivElement) ? tmp$_0 : throwCCE();
    this.cardBuilder_0 = new GameCardBuilder();
  }
  WishListPage.prototype.show = function () {
    this.presenter_0.attach_gp5muc$(this);
    this.presenter_0.loadBooks();
  };
  WishListPage.prototype.showGames_4sg1d3$ = function (games) {
    var tmp$;
    tmp$ = games.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var card = this.cardBuilder_0.build_1beoi$(element);
      this.content_0.appendChild(card);
    }
  };
  WishListPage.prototype.showLoader = function () {
    this.loader_0.style.visibility = 'visible';
  };
  WishListPage.prototype.hideLoader = function () {
    this.loader_0.style.visibility = 'hidden';
  };
  WishListPage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WishListPage',
    interfaces: [WishListContract$View]
  };
  function WishListPresenter() {
    this.view_ims5uy$_0 = this.view_ims5uy$_0;
  }
  Object.defineProperty(WishListPresenter.prototype, 'view_0', {
    configurable: true,
    get: function () {
      if (this.view_ims5uy$_0 == null)
        return throwUPAE('view');
      return this.view_ims5uy$_0;
    },
    set: function (view) {
      this.view_ims5uy$_0 = view;
    }
  });
  WishListPresenter.prototype.attach_gp5muc$ = function (view) {
    this.view_0 = view;
  };
  function WishListPresenter$loadBooks$lambda(this$WishListPresenter) {
    return function (response) {
      var books = JSON.parse(response);
      this$WishListPresenter.view_0.hideLoader();
      this$WishListPresenter.view_0.showGames_4sg1d3$(toList(books));
      return Unit;
    };
  }
  WishListPresenter.prototype.loadBooks = function () {
    this.view_0.showLoader();
    this.getAsync_0(API_URL, WishListPresenter$loadBooks$lambda(this));
  };
  function WishListPresenter$getAsync$lambda(closure$xmlHttp, closure$callback) {
    return function (it) {
      if (closure$xmlHttp.readyState === toShort(4) && closure$xmlHttp.status === toShort(200)) {
        closure$callback(closure$xmlHttp.responseText);
      }return Unit;
    };
  }
  WishListPresenter.prototype.getAsync_0 = function (url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url);
    xmlHttp.onload = WishListPresenter$getAsync$lambda(xmlHttp, callback);
    xmlHttp.send();
  };
  WishListPresenter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WishListPresenter',
    interfaces: [WishListContract$Presenter]
  };
  _.Game = Game;
  _.GameCardBuilder = GameCardBuilder;
  Object.defineProperty(_, 'API_URL', {
    get: function () {
      return API_URL;
    }
  });
  _.main_kand9s$ = main;
  WishListContract.View = WishListContract$View;
  WishListContract.Presenter = WishListContract$Presenter;
  _.WishListContract = WishListContract;
  _.WishListPage = WishListPage;
  _.WishListPresenter = WishListPresenter;
  var tmp$;
  API_URL = typeof (tmp$ = getGameApiUrl()) === 'string' ? tmp$ : throwCCE();
  main([]);
  Kotlin.defineModule('output', _);
  return _;
}(typeof output === 'undefined' ? {} : output, kotlin);

//# sourceMappingURL=output.js.map
