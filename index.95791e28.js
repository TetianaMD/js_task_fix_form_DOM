document.querySelectorAll("form").forEach(function(e){e.querySelectorAll("input").forEach(function(e){var r=e.id,t=e.name,l=document.createElement("label");l.className="field-label",l.htmlFor=r;var a=t.replace(/([a-z])([A-Z])/g,"$1 $2");l.textContent=a.charAt(0).toUpperCase()+a.slice(1),e.parentNode.insertBefore(l,e),e.placeholder=a.charAt(0).toUpperCase()+a.slice(1)})});
//# sourceMappingURL=index.95791e28.js.map
