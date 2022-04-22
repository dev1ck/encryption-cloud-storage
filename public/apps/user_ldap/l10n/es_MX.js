OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "Ocurrió un fallo al borrar las asignaciones.",
    "Failed to delete the server configuration" : "No se pudo borrar la configuración del servidor",
    "The configuration is valid and the connection could be established!" : "¡La configuración es válida y la conexión puede establecerse!",
    "The configuration is valid, but the Bind failed. Please check the server settings and credentials." : "La configuración es válida, pero falló el Enlace. Por favor, compruebe la configuración del servidor y las credenciales.",
    "The configuration is invalid. Please have a look at the logs for further details." : "La configuración no es válida. Por favor, busque en el log para más detalles.",
    "No action specified" : "No se ha especificado la acción",
    "No configuration specified" : "No se ha especificado la configuración",
    "No data specified" : "No se han especificado los datos",
    " Could not set configuration %s" : "No se pudo establecer la configuración %s",
    "Configuration incorrect" : "Configuración Incorrecta",
    "Configuration incomplete" : "Configuración incompleta",
    "Configuration OK" : "Configuración OK",
    "Select groups" : "Seleccionar grupos",
    "Select object classes" : "Seleccionar la clase de objeto",
    "Do you really want to delete the current Server Configuration?" : "¿Realmente desea eliminar la configuración actual del servidor?",
    "Confirm Deletion" : "Confirmar eliminación",
    "Select attributes" : "Seleccionar atributos",
    "_%s group found_::_%s groups found_" : ["Grupo %s encontrado","Grupos %s encontrados"],
    "_%s user found_::_%s users found_" : ["Usuario %s encontrado","Usuarios %s encontrados"],
    "Could not find the desired feature" : "No se puede encontrar la función deseada.",
    "Invalid Host" : "Host inválido",
    "Users" : "Usuarios",
    "Groups" : "Grupos",
    "Test Configuration" : "Configuración de prueba",
    "Help" : "Ayuda",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "El filtro especifica que grupos LDAP tendrán acceso a %s.",
    "Other Attributes:" : "Otros atributos:",
    "Defines the filter to apply, when login is attempted. %%uid replaces the username in the login action. Example: \"uid=%%uid\"" : "Define el filtro a aplicar cuando se intenta identificar. %%uid remplazará al nombre de usuario en el proceso de identificación. Por ejemplo: \"uid=%%uid\"",
    "Host" : "Servidor",
    "You can omit the protocol, except you require SSL. Then start with ldaps://" : "Puede omitir el protocolo, excepto si requiere SSL. En ese caso, empiece con ldaps://",
    "Port" : "Puerto",
    "User DN" : "DN usuario",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "El DN del usuario cliente con el que se hará la asociación, p.ej. uid=agente,dc=ejemplo,dc=com. Para acceso anónimo, deje DN y contraseña vacíos.",
    "Password" : "Contraseña",
    "For anonymous access, leave DN and Password empty." : "Para acceso anónimo, deje DN y contraseña vacíos.",
    "One Base DN per line" : "Un DN Base por línea",
    "You can specify Base DN for users and groups in the Advanced tab" : "Puede especificar el DN base para usuarios y grupos en la pestaña Avanzado",
    "The filter specifies which LDAP users shall have access to the %s instance." : "El filtro especifica que usuarios LDAP pueden tener acceso a %s.",
    "Back" : "Atrás",
    "Continue" : "Continuar",
    "Advanced" : "Avanzado",
    "<b>Warning:</b> Apps user_ldap and user_webdavauth are incompatible. You may experience unexpected behavior. Please ask your system administrator to disable one of them." : "<b>Advertencia:</b> Las apps user_ldap y user_webdavauth son incompatibles. Puede que experimente un comportamiento inesperado. Pregunte al su administrador de sistemas para desactivar uno de ellos.",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Advertencia:</b> El módulo LDAP de PHP no está instalado, el sistema no funcionará. Por favor consulte al administrador del sistema para instalarlo.",
    "Connection Settings" : "Configuración de conexión",
    "Configuration Active" : "Configuracion activa",
    "When unchecked, this configuration will be skipped." : "Cuando deseleccione, esta configuracion sera omitida.",
    "Backup (Replica) Host" : "Servidor de copia de seguridad (Replica)",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "Dar un servidor de copia de seguridad opcional. Debe ser una réplica del servidor principal LDAP / AD.",
    "Backup (Replica) Port" : "Puerto para copias de seguridad (Replica)",
    "Disable Main Server" : "Deshabilitar servidor principal",
    "Only connect to the replica server." : "Conectar sólo con el servidor de réplica.",
    "Turn off SSL certificate validation." : "Apagar la validación por certificado SSL.",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "No se recomienda, ¡utilízalo únicamente para pruebas! Si la conexión únicamente funciona con esta opción, importa el certificado SSL del servidor LDAP en tu servidor %s.",
    "Cache Time-To-Live" : "Cache TTL",
    "in seconds. A change empties the cache." : "en segundos. Un cambio vacía la caché.",
    "Directory Settings" : "Configuración de directorio",
    "User Display Name Field" : "Campo de nombre de usuario a mostrar",
    "The LDAP attribute to use to generate the user's display name." : "El campo LDAP a usar para generar el nombre para mostrar del usuario.",
    "Base User Tree" : "Árbol base de usuario",
    "One User Base DN per line" : "Un DN Base de Usuario por línea",
    "User Search Attributes" : "Atributos de la busqueda de usuario",
    "Optional; one attribute per line" : "Opcional; un atributo por linea",
    "Group Display Name Field" : "Campo de nombre de grupo a mostrar",
    "The LDAP attribute to use to generate the groups's display name." : "El campo LDAP a usar para generar el nombre para mostrar del grupo.",
    "Base Group Tree" : "Árbol base de grupo",
    "One Group Base DN per line" : "Un DN Base de Grupo por línea",
    "Group Search Attributes" : "Atributos de busqueda de grupo",
    "Group-Member association" : "Asociación Grupo-Miembro",
    "Special Attributes" : "Atributos especiales",
    "Quota Field" : "Cuota",
    "Quota Default" : "Cuota por defecto",
    "in bytes" : "en bytes",
    "Email Field" : "E-mail",
    "User Home Folder Naming Rule" : "Regla para la carpeta Home de usuario",
    "Leave empty for user name (default). Otherwise, specify an LDAP/AD attribute." : "Vacío para el nombre de usuario (por defecto). En otro caso, especifique un atributo LDAP/AD.",
    "Internal Username" : "Nombre de usuario interno",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [ a-zA-Z0-9_.@- ].  Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all *DAV services. With this setting, the default behavior can be overridden. To achieve a similar behavior as before ownCloud 5 enter the user display name attribute in the following field. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users." : "El nombre de usuario interno será creado de forma predeterminada desde el atributo UUID. Esto asegura que el nombre de usuario es único y los caracteres no necesitan ser convertidos. En el nombre de usuario interno sólo se pueden usar estos caracteres: [ a-zA-Z0-9_.@- ]. El resto de caracteres son sustituidos por su correspondiente en ASCII o simplemente omitidos. En caso de duplicidades, se añadirá o incrementará un número. El nombre de usuario interno es usado para identificar un usuario. Es también el nombre predeterminado para la carpeta personal del usuario en ownCloud. También es parte de URLs remotas, por ejemplo, para todos los servicios *DAV. Con esta configuración el comportamiento predeterminado puede ser cambiado. Para conseguir un comportamiento similar a como era antes de ownCloud 5, introduzca el campo del nombre para mostrar del usuario en la siguiente caja. Déjelo vacío para el comportamiento predeterminado. Los cambios solo tendrán efecto en los usuarios LDAP mapeados (añadidos) recientemente.",
    "Internal Username Attribute:" : "Atributo Nombre de usuario Interno:",
    "Override UUID detection" : "Sobrescribir la detección UUID",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "Por defecto, el atributo UUID es autodetectado. Este atributo es usado para identificar indudablemente usuarios y grupos LDAP. Además, el nombre de usuario interno será creado en base al UUID, si no ha sido especificado otro comportamiento arriba. Puedes sobrescribir la configuración y pasar un atributo de tu elección. Debes asegurarte de que el atributo de tu elección sea accesible por los usuarios y grupos y ser único. Déjalo en blanco para usar el comportamiento por defecto. Los cambios tendrán efecto solo en los usuarios y grupos de LDAP mapeados (añadidos) recientemente.",
    "UUID Attribute for Users:" : "Atributo UUID para usuarios:",
    "UUID Attribute for Groups:" : "Atributo UUID para Grupos:",
    "Username-LDAP User Mapping" : "Asignación del Nombre de usuario de un usuario LDAP",
    "Clear Username-LDAP User Mapping" : "Borrar la asignación de los Nombres de usuario de los usuarios LDAP",
    "Clear Groupname-LDAP Group Mapping" : "Borrar la asignación de los Nombres de grupo de los grupos de LDAP"
},
"nplurals=2; plural=(n != 1);");
