********
nasa_app
********

* Projekt zaliczeniowy na Programowanie aplikacji internetowych
* Grupa: Małgorzata 11161, Patrycja 11738, Piotr 11233
* Klient serwisu sieciowego

1. Cel projektu: Stworzenie aplikacji, dzięki której dowiemy się kilku podstawowych ciekawostek na tematy okołokosmiczne tzn. zdjęcie dnia od NASA, losowe zdjęcia z łazika od NASA oraz kto obecnie znajduje się na w przestrzeni kosmicznej. Projekt musi być łatwy w przekazie dla użytkownika. 



2. Grupa docelowa: Grupą docelową jest każdy użytkownik, który interesuje się przestrzenią kosmiczną.  
 

3. Założenia projektu: 

- przejrzysty i miły dla oka interfejs 

- zdjęcia wykonane przez łazik marsjański  

- informacja o ludziach w kosmoasie obecnie 

- zdjęcie dnia z NASA 

 
4. Wykorzystane api: przekazywanie zainteresowanym użytkownikom nowych informacji oraz zdjęć dotyczących kosmosu.
 https://api.nasa.gov/ - główne źródło API wykorzystanych w projekcie do zdjęcia dnia i zdjęć z łazika.
 http://open-notify.org/Open-Notify-API/People-In-Space/ - API odpowiadajace za sekcję ludzi w kosmosie.
   1. APOD (https://api.nasa.gov/planetary/apod?api_key=RzSVtSdYidZJNaO9QVhh5eYS5z25ECPuZsp5gLid) - One of the most popular websites at NASA is the Astronomy Picture of the Day. 
   2. Mars Rover Photos (https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=RzSVtSdYidZJNaO9QVhh5eYS5z25ECPuZsp5gLid) - This API is designed to collect image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars and make it more easily available to other developers, educators, and citizen scientists.
   3. http://api.open-notify.org/astros.json - This API returns the current number of people in space. When known it also returns the names and spacecraft those people are on. This API takes no inputs.
Na potrzebu wyświetlania storny na platfornie Github zostało wprowadzone rozwiązanie niesynchronizacji githuba z serwerem api http. Github współpracuje tylko ze skryptami na bazie protokołów https, dlatego na potrzeby poprawności wyświetlania projektu na tej platformie, plik json został umieszczony w kodzie strony jako backup danych w zmiennej.
   
5. Wykorzystanie biblioteki zewnętrznej do sekscji galerii zdjęć z łazika: https://swiperjs.com

6. Harmonogram realizacji projektu: 
   1. Wstępne zebranie informacji o projekcie 
   2. Postawienie celu oraz założeń 
   3. Pykonanie „szkieletu” strony 
   4. Realizacja założeń 
   5. Faza testowania po wprowadzeniu nowych funkcjonalności
   6. Finalna wersja projektu. 
