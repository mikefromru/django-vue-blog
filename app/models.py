from django.db import models

class Category(models.Model):

    name = models.CharField(max_length=250)

    def __str__(self):
        return self.name

class Post(models.Model):

    title = models.CharField(max_length=250)
    body = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    category = models.ForeignKey(Category, related_name='entries', on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    class Meta:

        verbose_name = 'Post'
        verbose_name_plural = 'Posts'