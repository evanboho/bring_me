(function() {

  var App, Node, Paths, Path, NodeView;

  App = new Backbone.Marionette.Application();

  App.addRegions({
    main: '#main'
  });

  var NodeController = Marionette.Controller.extend({
    index: function(id) {
      if (!id) id = 1;
      node = _.find(FIXTURES.NODES, function(node) { return node.id == id });
      paths = _.map(node.pathIds, function(id) {
        return _.find(FIXTURES.PATHS, function(path) { return path.id == id });
      })
      collection = new Paths(paths)
      model = new Node(node)
      var view = new NodesView({model: model, collection: collection});
      App.main.show(view);
    }
  });

  var nodeController = new NodeController;

  var router = new Marionette.AppRouter({
    controller: nodeController,
    appRoutes: {
      "(:id)": "index"
    }
  });

  Node = Backbone.Model.extend({});
  Path = Backbone.Model.extend({});

  Nodes = Backbone.Collection.extend({
    model: Node
  });

  Paths = Backbone.Collection.extend({
    mode: Path
  })

  PathView = Backbone.Marionette.ItemView.extend({
    template: '#path-template',
    tagName: 'li',
    className: 'path',
    events: {
      click: function() {
        window.location.hash = '#' + this.model.get('nodeId')
      }
    },
    onRender: function() {
      this.$el.css({
        'background-color': FIXTURES.BACKGROUND_COLORS[this._index],
        color: 'white'
      });
    }
  });

  NodesView = Backbone.Marionette.CompositeView.extend({
    template: '#node-template',
    childView: PathView,
    childViewContainer: 'ul'
  })

  App.addInitializer(function(options) {
    Backbone.history.start();
  });

  App.start();
})();