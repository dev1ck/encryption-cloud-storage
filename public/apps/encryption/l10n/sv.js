OC.L10N.register(
    "encryption",
    {
    "Missing recovery key password" : "Saknar lösenord för återställningsnyckel",
    "Please repeat the recovery key password" : "Vänligen upprepa lösenordet för återställningsnyckel",
    "Repeated recovery key password does not match the provided recovery key password" : "Det upprepade lösenordet för återställningsnyckeln matchar inte tillhandahållna lösenordet för återställningsnyckeln",
    "Recovery key successfully enabled" : "Återställningsnyckeln har framgångsrikt aktiverats",
    "Could not enable recovery key. Please check your recovery key password!" : "Kunde inte aktivera återställningsnyckeln. Vänligen kontrollera ditt lösenord för återställningsnyckeln!",
    "Recovery key successfully disabled" : "Återställningsnyckeln har framgångsrikt inaktiverats",
    "Could not disable recovery key. Please check your recovery key password!" : "Kunde inte inaktivera återställningsnyckeln. Vänligen kontrollera ditt lösenord för återställningsnyckeln!",
    "Missing parameters" : "Saknar parametrar",
    "Please provide the old recovery password" : "Vänligen tillhandahåll det gamla återställningslösenordet ",
    "Please provide a new recovery password" : "Vänligen tillhandahåll ett nytt återställningslösenord",
    "Please repeat the new recovery password" : "Vänligen upprepa det nya återställningslösenordet",
    "Password successfully changed." : "Ändringen av lösenordet lyckades.",
    "Could not change the password. Maybe the old password was not correct." : "Kunde inte ändra lösenordet. Kanske det gamla lösenordet inte var rätt.",
    "Recovery Key disabled" : "Återställningsnyckeln inaktiverad",
    "Recovery Key enabled" : "Återställningsnyckeln aktiverad",
    "Could not enable the recovery key, please try again or contact your administrator" : "Återställningsnyckeln kunde inte aktiveras, försök igen eller kontakta din administratör",
    "Could not update the private key password." : "Kunde inte uppdatera lösenord för den privata nyckeln",
    "The old password was not correct, please try again." : "Det gamla lösenordet var inte korrekt. Vänligen försök igen.",
    "The current log-in password was not correct, please try again." : "Det nuvarande inloggningslösenordet var inte korrekt. Vänligen försök igen.",
    "Private key password successfully updated." : "Den privata nyckelns lösenord uppdaterades.",
    "You need to migrate your encryption keys from the old encryption (ownCloud <= 8.0) to the new one. Please run 'occ encryption:migrate' or contact your administrator" : "Du behöver migrera dina krypteringsnycklar från den gamla krypteringen (ownCloud <= 8.0) till den nya. Kör 'occ encryption:migrate' eller kontakta din administratör",
    "Invalid private key for Encryption App. Please update your private key password in your personal settings to recover access to your encrypted files." : "Ogiltig privat nyckel i krypteringsprogrammet. Vänligen uppdatera lösenordet till din privata nyckel under dina personliga inställningar för att återfå tillgång till dina krypterade filer.",
    "Encryption App is enabled, but your keys are not initialized. Please log-out and log-in again." : "Krypteringsapp är aktiverad men dina nycklar är inte initialiserade. Vänligen logga ut och in igen.",
    "Encryption App is enabled and ready" : "Krypteringsappen är aktiverad och redo",
    "Bad Signature" : "Dålig signatur",
    "Missing Signature" : "Saknar signatur",
    "one-time password for server-side-encryption" : "engångslösenord för kryptering på serversidan",
    "Can not decrypt this file, probably this is a shared file. Please ask the file owner to reshare the file with you." : "Kan ej dekryptera denna fil, förmodligen är det en delad fil. Be ägaren av filen att dela den med dig.",
    "Can not read this file, probably this is a shared file. Please ask the file owner to reshare the file with you." : "Filen kan inte läsas, troligtvis är det en delad fil. Be ägaren av filen att dela den med dig igen.",
    "Hey there,\n\nthe admin enabled server-side-encryption. Your files were encrypted using the password '%s'.\n\nPlease login to the web interface, go to the section 'ownCloud basic encryption module' of your personal settings and update your encryption password by entering this password into the 'old log-in password' field and your current login-password.\n\n" : "Hej,\n\nadministratören har aktiverat kryptering på servern. Dina filer har krypterats med lösenordet '%s'.\n\nVänligen logga in i webbgränssnittet, gå till \"ownCloud baskrypteringsmodul\" i dina personliga inställningar och uppdatera ditt krypteringslösenord genom att mata in det här lösenordet i fältet \"gamla inloggningslösenordet\" och ditt nuvarande inloggningslösenord.\n\n",
    "The share will expire on %s." : "Utdelningen kommer att upphöra %s.",
    "Cheers!" : "Ha de fint!",
    "Hey there,<br><br>the admin enabled server-side-encryption. Your files were encrypted using the password <strong>%s</strong>.<br><br>Please login to the web interface, go to the section \"ownCloud basic encryption module\" of your personal settings and update your encryption password by entering this password into the \"old log-in password\" field and your current login-password.<br><br>" : "Hej,<br><br>administratören har aktiverat kryptering på servern. Dina filer har krypterats med lösenordet <strong>%s</strong>.<br><br>Vänligen logga in i webbgränssnittet, gå till \"ownCloud baskrypteringsmodul\" i dina personliga inställningar och uppdatera ditt krypteringslösenord genom att mata in det här lösenordet i fältet \"gamla inloggningslösenordet\" och ditt nuvarande inloggningslösenord.<br><br>",
    "Default encryption module" : "Standardmodul för kryptering",
    "Encryption App is enabled but your keys are not initialized, please log-out and log-in again" : "Krypteringsprogrammet är aktiverat men dina nycklar är inte initierade. Vänligen logga ut och  in igen",
    "Encryption type: Master Key" : "Krypteringstyp: Huvudnyckel",
    "Encryption type: User Specific Key" : "Krypteringstyp: Användarspecifik nyckel",
    "Please select an encryption option" : "Välj ett krypteringsalternativ",
    "Master Key" : "Huvudnyckel",
    "User-specific key" : "Användarspecifik nyckel",
    "Permanently select this mode" : "Välj detta läge permanent",
    "Encrypt the home storage" : "Kryptera hemmalagringen",
    "Enabling this option encrypts all files stored on the main storage, otherwise only files on external storage will be encrypted" : "Aktivering av det här alternativet krypterar alla filer som är lagrade på huvudlagringsplatsen, annars kommer bara filer på extern lagringsplats att krypteras",
    "Enable recovery key" : "Aktivera återställningsnyckel",
    "Disable recovery key" : "Inaktivera återställningsnyckel",
    "The recovery key is an extra encryption key that is used to encrypt files. It allows recovery of a user's files if the user forgets his or her password." : "Återställningsnyckeln är en extra krypteringsnyckel som används för att kryptera filer. Den gör det möjligt att återställa en användares filer om användaren glömmer sitt lösenord.",
    "Recovery key password" : "Lösenord för återställningsnyckel",
    "Repeat recovery key password" : "Upprepa lösenord för återställningsnyckeln",
    "Change recovery key password:" : "Ändra lösenord för återställningsnyckel:",
    "Old recovery key password" : "Gammalt lösenord för återställningsnyckeln",
    "New recovery key password" : "Nytt lösenord för återställningsnyckeln",
    "Repeat new recovery key password" : "Upprepa nytt lösenord för återställningsnyckeln",
    "Change Password" : "Byt lösenord",
    "ownCloud basic encryption module" : "ownCloud baskrypteringsmodul",
    "Your private key password no longer matches your log-in password." : "Ditt lösenord för din privata nyckel matchar inte längre ditt inloggningslösenord.",
    "Set your old private key password to your current log-in password:" : "Sätt ditt gamla privatnyckellösenord till ditt aktuella inloggningslösenord:",
    " If you don't remember your old password you can ask your administrator to recover your files." : "Om du inte kommer ihåg ditt gamla lösenord kan du be din administratör att återställa dina filer.",
    "Old log-in password" : "Gammalt inloggningslösenord",
    "Current log-in password" : "Nuvarande inloggningslösenord",
    "Update Private Key Password" : "Uppdatera lösenordet för din privata nyckel",
    "Enable password recovery:" : "Aktivera lösenordsåterställning",
    "Enabling this option will allow you to reobtain access to your encrypted files in case of password loss" : "Genom att aktivera detta alternativ kommer du kunna återfå tillgång till dina krypterade filer om du skulle förlora/glömma ditt lösenord",
    "Enabled" : "Aktiverad",
    "Disabled" : "Inaktiverad"
},
"nplurals=2; plural=(n != 1);");
