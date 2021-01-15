# Dokumentacja

> Api ma na celu obsługe zarządzania postami w aplikacjach działających jak tablice ogłoszeń. Celem pracy była prostota i łatwość korzystania z tego rozwiązania.

Autorami tego api są Marcin Czaniecki i Agata Karczewska

- [Dokumentacja api](#dokumentacja-api)
- [Pobierz wszystkie posty](#pobierz-wszystkie-posty)
- [Pobierz jeden post](#pobierz-jeden-post)
- [Dodaj post](#dodaj-post)
- [Edytuj post](#edytuj-post)
- [Usuń post](#usuń-post)

![Mapa API](https://i.ibb.co/3fWDpcj/pobrane.png)

### Dokumentacja api

**_Typ: get_**

endpoint:

```
/
```

### Pobierz wszystkie posty

**_Typ: get_**

endpoint:

```
/posts
```

### Pobierz jeden post

**_Typ: get_**

endpoint:

```
/posts/:id
```

### Dodaj post

**_Typ: POST_**

endpoint:

```
/posts/add
```

### Edytuj post

**_Typ: PUT_**

endpoint:

```
/posts/:id
```

### Usuń post

**_Typ: DELETE_**

endpoint:

```
/posts/:id
```

## Struktura posta
> Post jest skonstruowany za pomocą mongoose schema i wyeksportowany jako model

![Mapa struktury posta](https://i.ibb.co/VHjf2Xd/Screenshot-2.png)