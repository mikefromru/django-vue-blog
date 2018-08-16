from rest_framework.response import Response
from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView
from . models import Post, Category
from . serializers import PostSerializer, CategorySerializer
from rest_framework.views import APIView
# from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters

class SearchPosts(ListAPIView):

    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ('title',)

class GetCategory(APIView):

    def get(self, request, id):
        posts = Post.objects.filter(category_id=id).all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

class CategoryListView(ListAPIView):

    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class PostListView(ListAPIView):

    queryset = Post.objects.all()
    serializer_class = PostSerializer 

class PostDetailView(RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer 

