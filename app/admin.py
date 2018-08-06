from django.contrib import admin
from . models import Post, Category

def make_pdf(modeladmin, request, queryset):
    print('Hello world')

make_pdf.short_description = "Export pdf"

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):

    list_filter = ('title', 'created', 'updated')
    list_display_links = ('title', 'created', 'updated')
    list_display = ('title', 'created', 'updated')
    search_fields = ('title', 'body')
    
    actions = [make_pdf]

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):

    list_display_links = ('name',)
    list_display = ('name',)
    search_fields = ('name',)

