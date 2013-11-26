App.module "Views", (Views, App, Backbone, Marionette, $, _) ->
  class Views.LayerExpandable extends Marionette.Layout
    regions:
      'expandable': '.expandable-content'

    onShow: ->
      @expandable.show new Views.BadLayers({
        collection: new Backbone.Collection(
          _.map(@model.get('layers'), (v) -> {name: v})
        )
      })
