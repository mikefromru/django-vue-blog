from django.urls import path
from . import views

urlpatterns = [
    path('api/posts/', views.PostListView.as_view()),
    path('api/posts/search/', views.SearchPosts.as_view()),
    path('api/categories/', views.CategoryListView.as_view()),
    path('api/post/<int:pk>/', views.PostDetailView.as_view()),
    path('api/category/<int:id>/', views.GetCategory.as_view()),
]