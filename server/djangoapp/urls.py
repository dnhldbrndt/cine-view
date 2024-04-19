# pylint: disable=line-too-long
# Uncomment the imports before you add the code
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from . import views

app_name = 'djangoapp'
urlpatterns = [
    # # path for registration
    path(route='register', view=views.registration, name='register'),
    # path for login
    path(route='login', view=views.login_user, name='login'),
    path(route='logout', view=views.logout_request, name='logout'),

    # path for movies view
    path(route='get_movies', view=views.get_movies, name='get_movies'),
    path(route='get_movies/<str:genre>', view=views.get_movies, name='get_movies_by_genre'),
    path(route='movie/<str:movie_id>', view=views.get_movie_details, name='movie_details'),
    path(route='reviews/movie/<str:movie_id>', view=views.get_movie_reviews, name='movie_reviews'),
    # path for add a review view
    path(route='add_review', view=views.add_review, name='add_review'),
    # path for search
    path(route='search/<str:search_term>', view=views.get_movies_search, name='movie_search'),
 
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
