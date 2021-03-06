!(function() {
  LNT = window.LNT || {};

  LNT.getBlendingModes = function(PSD) {
    var hash = {};

    _(PSD.children).each(function(v) {
      LNT.propertyWalker(v, function(node, p) {
        if (node.blending_mode != null) {
          if (hash[node.blending_mode]) {
            hash[node.blending_mode].push(node.name);
          } else {
            hash[node.blending_mode] = [node.name]
          }
        }
      });
    });

    return hash;
  }
}());
